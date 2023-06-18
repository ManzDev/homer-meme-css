class HomerEar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${HomerEar.styles}</style>
    <svg class="sideburn" width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1 66V2L33 34L65 2V66" stroke="var(--stroke-color)" /></svg>
    <div class="ear"></div>`;
  }
}

customElements.define("homer-ear", HomerEar);
