(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        position: relative;
      }

      .eye {
        --size: 90px;

        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background: #fff;
        border: 2px solid var(--stroke-color);
        display: grid;
        place-items: center;
        transform: translateX(-24px);
        overflow: hidden;
      }

      .pupil {
        --size: 10px;

        width: var(--size);
        height: var(--size);
        border-radius: 50%;
        background: var(--stroke-color);
        translate: -5px;
        transition: transform 1s;
        /* animation: move 5s infinite; */
      }

      :host(.left) .eye-gap {
        width: 40px;
        height: 35px;
        border-radius: 15px;
        background: var(--skin-color);
        position: absolute;
        top: 0;
        left: 0;
        transform: rotate(-30deg) translate(-8px, -12px);
      }

      .eye.lid::before {
        --value: 0px;

        content: "";
        display: block;
        background: transparent;
        border-radius: 50%;
        box-shadow: 0 calc(-1 * var(--value)) var(--skin-color);
        width: 115px;
        height: calc(var(--value) * 2);
        transform: translateY(27px);
        position: absolute;
        z-index: 5;
      }

      :host(.right) .eye {
        transform: translateX(-42px);
      }

      :host(.left) .pupil {
        translate: -20px;
        /* animation: move 5s infinite; */
      }

      @keyframes move {
        0%, 50%, 100% { translate: -20px }
        25% { translate: 0; }
        75% { translate: 20px }
      }

      .pupil.move {
        transform: translateX(-15px);
      }
    `}connectedCallback(){this.render()}move(){this.shadowRoot.querySelector(".pupil").classList.add("move")}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
    <div class="eye-gap"></div>
    <div class="eye lid">
      <div class="pupil"></div>
    </div>`}}customElements.define("homer-eye",s);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {

      }

      .beard-container {
        width: 130px;
        height: 90px;
        display: flex;
        justify-content: end;
        align-items: end;
        position: relative;
        transform: rotate(2deg) scale(1.3) translate(-6px, -11px);
        filter:
          drop-shadow(2px 0 0 #655427)
          drop-shadow(0 1px 0 #655427)
          drop-shadow(-2px 0 0 #222)
      }

      .beard-container .circle {
        width: 75px;
        height: 75px;
        background: var(--beard-color);
        border-radius: 50%;

        display: flex;
        justify-content: end;
      }

      .circle-2 {
        width: 85px;
        height: 80px;
        background: var(--beard-color);
        border-radius: 35px;
        position: absolute;
        transform: translate(-5px, 5px);
      }

      .beard-container .box {
        background: var(--beard-color);
        width: 95px;
        height: 50px;
        position: absolute;
        border-radius: 30px;
        transform: translate(-20px, 0);
      }

      .up.lip {
        background: var(--beard-color);
        width: 80px;
        height: 25px;
        position: absolute;
        border-radius: 22% 0% 0% 42% / 42% 0% 0% 59%;
        bottom: 0;
        left: 0;
        transform: translate(8px, -25px);
      }

      .down.lip {
        background: var(--beard-color);
        width: 80px;
        height: 25px;
        position: absolute;
        border-radius: 10% 0% 0% 25% / 50% 0% 0% 50%;
        left: 0;
        bottom: 0;
        transform: translate(24px, -12px);
      }

      .mouth {
        width: 20px;
        height: 2px;
        position: absolute;
        left: 0;
        bottom: 0;
        background: #655427;
        transform: translate(24px, -25px);
        z-index: 5;
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <div class="beard-container">
      <div class="circle">
        <div class="box"></div>
      </div>
      <div class="circle-2"></div>
      <div class="mouth"></div>
      <div class="up lip"></div>
      <div class="down lip"></div>
    </div>`}}customElements.define("homer-mouth",a);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --stroke-color: #222;
        --border-size: 2px;
      }

      .ear {
        --size: 50px;
        width: var(--size);
        height: var(--size);
        background-color: var(--skin-color);
        border: var(--border-size) solid var(--stroke-color);
        border-radius: 50%;
        position: relative;
        clip-path: polygon(15% 0%, 100% 0%, 100% 100%, 15% 100%);
      }

      .ear::after {
        content: "";
        width: 80%;
        height: 80%;
        position: absolute;
        border-radius: 50%;
        bottom: -10%;
        right: 0;
        border: var(--border-size) solid;
        border-color: #0000 #0000 #0000 var(--stroke-color);
        transform: rotate(60deg);
      }

      .ear::before {
        content: "";
        width: 50%;
        height: 70%;
        position: absolute;
        border-radius: 50%;
        bottom: -10%;
        left: 0;
        border: var(--border-size) solid var(--stroke-color);
        border-color: var(--stroke-color) #0000 #0000 #0000;
        transform: rotate(35deg);
      }

      .sideburn {
        --stroke-color: #222;

        position: absolute;
        stroke-width: 4px;
        right: 0;
        transform: translate(15px, -65px) scale(0.75, 0.75) rotateZ(14deg);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <svg class="sideburn" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 66V2L33 34L65 2V66" stroke="var(--stroke-color)" /></svg>
    <div class="ear"></div>`}}customElements.define("homer-ear",i);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      .head {
        width: 200px;
        height: 350px;
        border-radius: 160px 160px 75px 225px / 160px 160px 100px 300px;
        background: var(--skin-color);

        display: flex;
        flex-direction: column;
        justify-content: end;
      }

      .head::after {
        background: var(--skin-color);
        width: 140px;
        height: 200px;
        display: block;
        content: "";
        right: 0px;
        bottom: -90px;
        position: absolute;
        z-index: -1;
        clip-path: polygon(-55% 25%, 125% 25%, 50% 100%)
      }

      .eyes {
        display: flex;
        height: 80px;
      }

      homer-eye:nth-child(2) {
        z-index: 10;
      }

      .content {
        transform: translate(0, -10px);
      }

      .nose {
        width: 90px;
        height: 50px;
        background: var(--skin-color);
        border-radius: 45px 0 0 45px / 40px 0 0 40px;
        border: 2px solid #111;
        border-right: 0;
        border-bottom: 0;
        z-index: 5;
        transform: translateX(-8px) translateY(-8px);
      }

      homer-ear {
        position: absolute;
        right: 0;
        transform: translate(20px, -95px) rotate(-12deg);
      }

      .hair {
        --stroke-color: #222;

        position: absolute;
        top: -20px;
        stroke-width: 3px;
        transform: translate(35px, -15px) scale(0.7) rotate(5deg);
        filter: drop-shadow(20px 0 0 #000);
      }

      .head::before {
        content: "";
        display: block;
        position: absolute;
        background: var(--skin-color);
        top: 0;
        width: 40px;
        height: 40px;
        z-index: 5;
        transform: translate(50px, 8px) rotate(-25deg);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${n.styles}</style>
    <div class="head">
      <div class="content">
        <div class="eyes">
          <homer-eye class="left"></homer-eye>
          <homer-eye class="right"></homer-eye>
        </div>
        <div class="nose"></div>
        <homer-mouth></homer-mouth>
      </div>
      <homer-ear></homer-ear>
      <svg class="hair" width="130" height="65" viewBox="0 0 130 65" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M129 65C129 29.6538 100.346 1 65 1C29.6538 1 1 29.6538 1 65" stroke="black"/> </svg>
    </div>`}}customElements.define("homer-head",n);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host {
        --skin-color: #eac249;
        --stroke-color: #111;
        --beard-color: #b09659;
      }

      .container {

      }

      homer-head {
        display: inline-block;
        transform: rotate(10deg);
      }
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
    <div class="container">
      <homer-head></homer-head>
    </div>`}}customElements.define("homer-simpson",d);
