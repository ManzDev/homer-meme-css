import "./HomerEye.js";
import "./HomerMouth.js";
import "./HomerEar.js";

class HomerHead extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${HomerHead.styles}</style>
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
    </div>`;
  }
}

customElements.define("homer-head", HomerHead);
