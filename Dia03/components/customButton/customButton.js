export class CustomButton extends HTMLElement {
  data = {};

  handleClick = () => {}

  static get observedAttributes() {
    return ["data"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.render(shadow);
  }

  bindEvents = () => {
    const shadow = this.shadowRoot;
    
    const input = shadow.getElementById("customButton");
    input.onclick = () => this.handleClick()
  }

  render = (shadow) => {
    shadow.innerHTML = this.populate();
    this.getStyles().forEach(style => shadow.appendChild(style));
    this.bindEvents();
  }

  populate = () => {
    const data = this.data;
    return (`
      <button type="button" class="customButton" id="customButton">
        <label>Search</label>
      </button>
    `);
  };

  getStyles = () => {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "./components/customButton/customButton.css");

    return [link];
  };

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      switch (name) {
        case "data":
          this.data = JSON.parse(newVal);
          break;
        default:
      }
      const shadow = this.shadowRoot
      this.render(shadow);
    }
  }
}

window.customElements.define("custom-button", CustomButton);
