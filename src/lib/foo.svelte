<script lang="ts">
  import { onMount } from 'svelte';
  import type { NoteEvent } from './types';

  let midiAccess: WebMidi.MIDIAccess;
  let selectedInput: WebMidi.MIDIInput | null = null;
  let noteEvents: NoteEvent[] = [];
  let inputOptions: { id: string, name: string }[] = [];

  const handleMidiMessage = (event: WebMidi.MIDIMessageEvent) => {
    // console.log('handleMidiMessage', event.data)
    const command = event.data[0];
    const timestamp = event.timeStamp;
    const note = event.data[1];
    const velocity = (event.data.length > 2) ? event.data[2] : 0;
    // note on
    if (command <= 144 && command <=159) {
      const note = event.data[1];
      const velocity = event.data[2];
      noteEvents = [{ note, timestamp, velocity }, ...noteEvents];
    }
  };

  const updateSelectedInput = (input: MIDIInput) => {
    if (selectedInput !== input) {
      if (selectedInput) {
        selectedInput.removeEventListener('midimessage', handleMidiMessage);
      }
      selectedInput = input;
      selectedInput.addEventListener('midimessage', handleMidiMessage);
    }
  };

  const handleInputSelectChange = (event: Event) => {
    const inputId = (event.target as HTMLSelectElement).value;
    const input = midiAccess!.inputs.get(inputId);
    if (input) {
      updateSelectedInput(input);
    }
  };

  onMount(async () => {
    if (!navigator.requestMIDIAccess) {
      const err = 'WebMidi API not supported on this browser.';
      alert(err)
      console.log(err);
      return;
    }
    try {
      midiAccess = await navigator.requestMIDIAccess();
      midiAccess.onstatechange = (event) => {
        const inputs = Array.from(midiAccess!.inputs.values());
        if (inputs.length > 0) {
          inputOptions = inputs.map((input, i) => ({ id: input.id, name: `${i} ${input.name}` }));
          if (!selectedInput || !inputs.includes(selectedInput)) {
            updateSelectedInput(inputs[0]);
          }
        } else {
          inputOptions = [{ id: '', name: 'No available MIDI inputs' }];
          selectedInput = null;
        }
      };
      midiAccess.onstatechange();
    } catch (error) {
      console.error('Failed to initialize MIDI: ', error);
    }
  });

  const displayNoteEvents = () => {
    const noteList = document.getElementById('note-list');
    noteList.innerHTML = '';
    noteEvents.forEach((event) => {
      const li = document.createElement('li');
      li.textContent = `Note: ${event.note}, Timestamp: ${event.timestamp}, Velocity: ${event.velocity}`;
      noteList.appendChild(li);
    });
  };
</script>
<h1>Svelte MIDI v1.1</h1>
<div>
    {#if selectedInput?.id}
      <label for="midi-input-select">Select MIDI Input:</label>
      <select bind:value={selectedInput.id} on:change={handleInputSelectChange}>
        {#each inputOptions as option}
          <option value={option.id}>{option.name}</option>
        {/each}
      </select>
    {:else}
      <label for="midi-input-select">No available MIDI inputs</label>
    {/if}
    <ul id="note-list">
      {#if noteEvents.length > 0}
        {#each noteEvents as event}
          <li>Note: {event.note}, Timestamp: {event.timestamp}, Velocity: {event.velocity}</li>
        {/each}
      {/if}
    </ul>
</div>
