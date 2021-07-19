export class DataRow extends HTMLElement {
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
    link.setAttribute("href", "./components/dataTable/dataRow/dataRow.css");

    return [link];
  };

  render = (shadow) => {
    shadow.innerHTML = this.populate();
    this.getStyles().forEach(style => shadow.appendChild(style));
  }

  populate = () => {
    if(!this.data) return `<div class="row">`;
    const { idx, row } = this.data;
    return `
        <div id="row_${idx}" class="row">
            <div class="field">${row.source.name}</div>
            <div class="field">${row.author}</div>
            <div class="field">${row.title}</div>
            <div class="field">${row.description}</div>
        </div>
  `;
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

window.customElements.define("data-row", DataRow);
