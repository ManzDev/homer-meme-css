class HomerEye extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  move() {
    const pupil = this.shadowRoot.querySelector(".pupil");
    pupil.classList.add("move");
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${HomerEye.styles}</style>
    <div class="eye-gap"></div>
    <div class="eye lid">
      <div class="pupil"></div>
    </div>`;
  }
}

customElements.define("homer-eye", HomerEye);
