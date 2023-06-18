import "./HomerHead.js";

class HomerSimpson extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${HomerSimpson.styles}</style>
    <div class="container">
      <homer-head></homer-head>
    </div>`;
  }
}

customElements.define("homer-simpson", HomerSimpson);
