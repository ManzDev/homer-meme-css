class HomerMouth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${HomerMouth.styles}</style>
    <div class="beard-container">
      <div class="circle">
        <div class="box"></div>
      </div>
      <div class="circle-2"></div>
      <div class="mouth"></div>
      <div class="up lip"></div>
      <div class="down lip"></div>
    </div>`;
  }
}

customElements.define("homer-mouth", HomerMouth);
