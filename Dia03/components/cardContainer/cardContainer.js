export class CardContainer extends HTMLElement {
  data = null;

  static get observedAttributes() {
    return ["data"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.render(shadow);
  }

  getStyles = () => {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "./components/cardContainer/cardContainer.css");

    return [link];
  };

  render = (shadow) => {
    shadow.innerHTML = this.populate();
    this.getStyles().forEach(style => shadow.appendChild(style));
  }

  populateRows = (data) => {
    const rows = data.map((item,idx) => {
        const dataRow = document.createElement("card-component");
        dataRow.setAttribute("data", JSON.stringify({item, idx}));

        return dataRow.outerHTML;
    })

    return rows.join("")
  };

  populate = () => {
    return this.data !== null
      ? `
            <div class="component">
              ${this.populateRows(this.data)}
            </div>
        `
      : "<div>Empty component</div>";
  };

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      switch (name) {
        case "data":
          this.data = JSON.parse(newVal);
          break;
        default:
          this.data = newVal;
      }
      const shadow = this.shadowRoot
      this.render(shadow);
    }
  }
}

window.customElements.define("card-container", CardContainer);
