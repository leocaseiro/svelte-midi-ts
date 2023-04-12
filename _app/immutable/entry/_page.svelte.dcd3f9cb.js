import{S as P,i as V,s as $,k as I,a as y,l as v,m as b,c as A,h,n as D,b as g,G as d,H as k,o as F,e as L,J as z,q as m,r as p,u as E,K as G,L as J,M as N,N as q,O as K,y as U,z as W,A as j,g as Q,d as R,B as X}from"../chunks/index.46f63c5c.js";function C(u,e,i){const l=u.slice();return l[9]=e[i],l}function O(u,e,i){const l=u.slice();return l[12]=e[i],l}function Y(u){let e,i;return{c(){e=I("label"),i=m("No available MIDI inputs"),this.h()},l(l){e=v(l,"LABEL",{for:!0});var t=b(e);i=p(t,"No available MIDI inputs"),t.forEach(h),this.h()},h(){D(e,"for","midi-input-select")},m(l,t){g(l,e,t),d(e,i)},p:k,d(l){l&&h(e)}}}function Z(u){let e,i,l,t,c,n,a=u[2],r=[];for(let s=0;s<a.length;s+=1)r[s]=T(O(u,a,s));return{c(){e=I("label"),i=m("Select MIDI Input:"),l=y(),t=I("select");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=v(s,"LABEL",{for:!0});var _=b(e);i=p(_,"Select MIDI Input:"),_.forEach(h),l=A(s),t=v(s,"SELECT",{});var o=b(t);for(let f=0;f<r.length;f+=1)r[f].l(o);o.forEach(h),this.h()},h(){D(e,"for","midi-input-select"),u[0].id===void 0&&J(()=>u[4].call(t))},m(s,_){g(s,e,_),d(e,i),g(s,l,_),g(s,t,_);for(let o=0;o<r.length;o+=1)r[o]&&r[o].m(t,null);N(t,u[0].id,!0),c||(n=[q(t,"change",u[4]),q(t,"change",u[3])],c=!0)},p(s,_){if(_&4){a=s[2];let o;for(o=0;o<a.length;o+=1){const f=O(s,a,o);r[o]?r[o].p(f,_):(r[o]=T(f),r[o].c(),r[o].m(t,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=a.length}_&5&&N(t,s[0].id)},d(s){s&&h(e),s&&h(l),s&&h(t),z(r,s),c=!1,K(n)}}}function T(u){let e,i=u[12].name+"",l,t;return{c(){e=I("option"),l=m(i),this.h()},l(c){e=v(c,"OPTION",{});var n=b(e);l=p(n,i),n.forEach(h),this.h()},h(){e.__value=t=u[12].id,e.value=e.__value},m(c,n){g(c,e,n),d(e,l)},p(c,n){n&4&&i!==(i=c[12].name+"")&&E(l,i),n&4&&t!==(t=c[12].id)&&(e.__value=t,e.value=e.__value)},d(c){c&&h(e)}}}function w(u){let e,i=u[1],l=[];for(let t=0;t<i.length;t+=1)l[t]=B(C(u,i,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=L()},l(t){for(let c=0;c<l.length;c+=1)l[c].l(t);e=L()},m(t,c){for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(t,c);g(t,e,c)},p(t,c){if(c&2){i=t[1];let n;for(n=0;n<i.length;n+=1){const a=C(t,i,n);l[n]?l[n].p(a,c):(l[n]=B(a),l[n].c(),l[n].m(e.parentNode,e))}for(;n<l.length;n+=1)l[n].d(1);l.length=i.length}},d(t){z(l,t),t&&h(e)}}}function B(u){let e,i,l=u[9].note+"",t,c,n=u[9].timestamp+"",a,r,s=u[9].velocity+"",_;return{c(){e=I("li"),i=m("Note: "),t=m(l),c=m(", Timestamp: "),a=m(n),r=m(", Velocity: "),_=m(s)},l(o){e=v(o,"LI",{});var f=b(e);i=p(f,"Note: "),t=p(f,l),c=p(f,", Timestamp: "),a=p(f,n),r=p(f,", Velocity: "),_=p(f,s),f.forEach(h)},m(o,f){g(o,e,f),d(e,i),d(e,t),d(e,c),d(e,a),d(e,r),d(e,_)},p(o,f){f&2&&l!==(l=o[9].note+"")&&E(t,l),f&2&&n!==(n=o[9].timestamp+"")&&E(a,n),f&2&&s!==(s=o[9].velocity+"")&&E(_,s)},d(o){o&&h(e)}}}function x(u){let e,i,l;function t(r,s){var _;return(_=r[0])!=null&&_.id?Z:Y}let c=t(u),n=c(u),a=u[1].length>0&&w(u);return{c(){e=I("div"),n.c(),i=y(),l=I("ul"),a&&a.c(),this.h()},l(r){e=v(r,"DIV",{});var s=b(e);n.l(s),i=A(s),l=v(s,"UL",{id:!0});var _=b(l);a&&a.l(_),_.forEach(h),s.forEach(h),this.h()},h(){D(l,"id","note-list")},m(r,s){g(r,e,s),n.m(e,null),d(e,i),d(e,l),a&&a.m(l,null)},p(r,[s]){c===(c=t(r))&&n?n.p(r,s):(n.d(1),n=c(r),n&&(n.c(),n.m(e,i))),r[1].length>0?a?a.p(r,s):(a=w(r),a.c(),a.m(l,null)):a&&(a.d(1),a=null)},i:k,o:k,d(r){r&&h(e),n.d(),a&&a.d()}}}function ee(u,e,i){let l,t=null,c=[],n=[];const a=o=>{console.log("handleMidiMessage",o);const f=o.data[0],M=o.timeStamp;if(o.data[1],o.data.length>2&&o.data[2],f<=144&&f<=159){const S=o.data[1],H=o.data[2];i(1,c=[{note:S,timestamp:M,velocity:H},...c])}},r=o=>{console.log("updateSelectedInput",o),t!==o&&(t&&t.removeEventListener("midimessage",a),i(0,t=o),t.addEventListener("midimessage",a))},s=o=>{console.log("handleSelectChange",o);const f=o.target.value,M=l.inputs.get(f);M&&r(M)};F(async()=>{if(console.log("onMount"),!navigator.requestMIDIAccess){const o="WebMidi API not supported on this browser.";alert(o),console.log(o);return}try{console.log("requestMidi"),l=await navigator.requestMIDIAccess(),l.onstatechange=o=>{console.log("midiAccess",l),console.log("midiAccess.inputs",l.inputs),console.log({event:o});const f=Array.from(l.inputs.values());console.log("midiAccess!.inputs",l.inputs),console.log("inputs",f),f.length>0?(i(2,n=f.map((M,S)=>({id:M.id,name:`${S} ${M.name}`}))),(!t||!f.includes(t))&&r(f[0])):(i(2,n=[{id:"",name:"No available MIDI inputs"}]),i(0,t=null))},l.onstatechange()}catch(o){console.error("Failed to initialize MIDI: ",o)}});function _(){t.id=G(this),i(0,t),i(2,n)}return[t,c,n,s,_]}class te extends P{constructor(e){super(),V(this,e,ee,x,$,{})}}function le(u){let e,i,l,t,c;return t=new te({}),{c(){e=I("h1"),i=m("Svelte MIDI Input"),l=y(),U(t.$$.fragment)},l(n){e=v(n,"H1",{});var a=b(e);i=p(a,"Svelte MIDI Input"),a.forEach(h),l=A(n),W(t.$$.fragment,n)},m(n,a){g(n,e,a),d(e,i),g(n,l,a),j(t,n,a),c=!0},p:k,i(n){c||(Q(t.$$.fragment,n),c=!0)},o(n){R(t.$$.fragment,n),c=!1},d(n){n&&h(e),n&&h(l),X(t,n)}}}class oe extends P{constructor(e){super(),V(this,e,null,le,$,{})}}export{oe as default};
