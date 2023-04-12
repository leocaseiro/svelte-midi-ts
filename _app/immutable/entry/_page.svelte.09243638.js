import{S as P,i as V,s as $,k as g,a as D,l as I,m as b,c as L,h,n as S,b as v,G as m,H as k,o as F,e as A,J as z,q as d,r as p,u as E,K as G,L as J,M as N,N as q,O as K,y as U,z as W,A as j,g as Q,d as R,B as X}from"../chunks/index.46f63c5c.js";function O(u,e,a){const n=u.slice();return n[9]=e[a],n}function T(u,e,a){const n=u.slice();return n[12]=e[a],n}function Y(u){let e,a;return{c(){e=g("label"),a=d("No available MIDI inputs"),this.h()},l(n){e=I(n,"LABEL",{for:!0});var t=b(e);a=p(t,"No available MIDI inputs"),t.forEach(h),this.h()},h(){S(e,"for","midi-input-select")},m(n,t){v(n,e,t),m(e,a)},p:k,d(n){n&&h(e)}}}function Z(u){let e,a,n,t,c,l,o=u[2],r=[];for(let s=0;s<o.length;s+=1)r[s]=w(T(u,o,s));return{c(){e=g("label"),a=d("Select MIDI Input:"),n=D(),t=g("select");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){e=I(s,"LABEL",{for:!0});var _=b(e);a=p(_,"Select MIDI Input:"),_.forEach(h),n=L(s),t=I(s,"SELECT",{});var i=b(t);for(let f=0;f<r.length;f+=1)r[f].l(i);i.forEach(h),this.h()},h(){S(e,"for","midi-input-select"),u[0].id===void 0&&J(()=>u[4].call(t))},m(s,_){v(s,e,_),m(e,a),v(s,n,_),v(s,t,_);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(t,null);N(t,u[0].id,!0),c||(l=[q(t,"change",u[4]),q(t,"change",u[3])],c=!0)},p(s,_){if(_&4){o=s[2];let i;for(i=0;i<o.length;i+=1){const f=T(s,o,i);r[i]?r[i].p(f,_):(r[i]=w(f),r[i].c(),r[i].m(t,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=o.length}_&5&&N(t,s[0].id)},d(s){s&&h(e),s&&h(n),s&&h(t),z(r,s),c=!1,K(l)}}}function w(u){let e,a=u[12].name+"",n,t;return{c(){e=g("option"),n=d(a),this.h()},l(c){e=I(c,"OPTION",{});var l=b(e);n=p(l,a),l.forEach(h),this.h()},h(){e.__value=t=u[12].id,e.value=e.__value},m(c,l){v(c,e,l),m(e,n)},p(c,l){l&4&&a!==(a=c[12].name+"")&&E(n,a),l&4&&t!==(t=c[12].id)&&(e.__value=t,e.value=e.__value)},d(c){c&&h(e)}}}function B(u){let e,a=u[1],n=[];for(let t=0;t<a.length;t+=1)n[t]=C(O(u,a,t));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=A()},l(t){for(let c=0;c<n.length;c+=1)n[c].l(t);e=A()},m(t,c){for(let l=0;l<n.length;l+=1)n[l]&&n[l].m(t,c);v(t,e,c)},p(t,c){if(c&2){a=t[1];let l;for(l=0;l<a.length;l+=1){const o=O(t,a,l);n[l]?n[l].p(o,c):(n[l]=C(o),n[l].c(),n[l].m(e.parentNode,e))}for(;l<n.length;l+=1)n[l].d(1);n.length=a.length}},d(t){z(n,t),t&&h(e)}}}function C(u){let e,a,n=u[9].note+"",t,c,l=u[9].timestamp+"",o,r,s=u[9].velocity+"",_;return{c(){e=g("li"),a=d("Note: "),t=d(n),c=d(", Timestamp: "),o=d(l),r=d(", Velocity: "),_=d(s)},l(i){e=I(i,"LI",{});var f=b(e);a=p(f,"Note: "),t=p(f,n),c=p(f,", Timestamp: "),o=p(f,l),r=p(f,", Velocity: "),_=p(f,s),f.forEach(h)},m(i,f){v(i,e,f),m(e,a),m(e,t),m(e,c),m(e,o),m(e,r),m(e,_)},p(i,f){f&2&&n!==(n=i[9].note+"")&&E(t,n),f&2&&l!==(l=i[9].timestamp+"")&&E(o,l),f&2&&s!==(s=i[9].velocity+"")&&E(_,s)},d(i){i&&h(e)}}}function x(u){let e,a,n;function t(r,s){var _;return(_=r[0])!=null&&_.id?Z:Y}let c=t(u),l=c(u),o=u[1].length>0&&B(u);return{c(){e=g("div"),l.c(),a=D(),n=g("ul"),o&&o.c(),this.h()},l(r){e=I(r,"DIV",{});var s=b(e);l.l(s),a=L(s),n=I(s,"UL",{id:!0});var _=b(n);o&&o.l(_),_.forEach(h),s.forEach(h),this.h()},h(){S(n,"id","note-list")},m(r,s){v(r,e,s),l.m(e,null),m(e,a),m(e,n),o&&o.m(n,null)},p(r,[s]){c===(c=t(r))&&l?l.p(r,s):(l.d(1),l=c(r),l&&(l.c(),l.m(e,a))),r[1].length>0?o?o.p(r,s):(o=B(r),o.c(),o.m(n,null)):o&&(o.d(1),o=null)},i:k,o:k,d(r){r&&h(e),l.d(),o&&o.d()}}}function ee(u,e,a){let n,t=null,c=[],l=[];const o=i=>{const f=i.data[0],M=i.timeStamp;if(i.data[1],i.data.length>2&&i.data[2],f<=144&&f<=159){const y=i.data[1],H=i.data[2];a(1,c=[{note:y,timestamp:M,velocity:H},...c])}},r=i=>{t!==i&&(t&&t.removeEventListener("midimessage",o),a(0,t=i),t.addEventListener("midimessage",o))},s=i=>{const f=i.target.value,M=n.inputs.get(f);M&&r(M)};F(async()=>{if(!navigator.requestMIDIAccess){const i="WebMidi API not supported on this browser.";alert(i),console.log(i);return}try{n=await navigator.requestMIDIAccess(),n.onstatechange=i=>{const f=Array.from(n.inputs.values());f.length>0?(a(2,l=f.map((M,y)=>({id:M.id,name:`${y} ${M.name}`}))),(!t||!f.includes(t))&&r(f[0])):(a(2,l=[{id:"",name:"No available MIDI inputs"}]),a(0,t=null))},n.onstatechange()}catch(i){console.error("Failed to initialize MIDI: ",i)}});function _(){t.id=G(this),a(0,t),a(2,l)}return[t,c,l,s,_]}class te extends P{constructor(e){super(),V(this,e,ee,x,$,{})}}function le(u){let e,a,n,t,c;return t=new te({}),{c(){e=g("h1"),a=d("Svelte MIDI Input"),n=D(),U(t.$$.fragment)},l(l){e=I(l,"H1",{});var o=b(e);a=p(o,"Svelte MIDI Input"),o.forEach(h),n=L(l),W(t.$$.fragment,l)},m(l,o){v(l,e,o),m(e,a),v(l,n,o),j(t,l,o),c=!0},p:k,i(l){c||(Q(t.$$.fragment,l),c=!0)},o(l){R(t.$$.fragment,l),c=!1},d(l){l&&h(e),l&&h(n),X(t,l)}}}class ie extends P{constructor(e){super(),V(this,e,null,le,$,{})}}export{ie as default};
