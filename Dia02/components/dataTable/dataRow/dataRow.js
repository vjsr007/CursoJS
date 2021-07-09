export class DataRow extends HTMLElement {
  data = {};

  static get observedAttributes() {
    return ["data"];
  }

  constructor() {
    super();
    this.createComponent();
  }

  createComponent = () => {
    const template = document.createElement("template");
    const templateContent = template.content;
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = templateContent.cloneNode(true);
  }

  render = () => {
    const shadow = this.shadowRoot
    shadow.innerHTML = this.populate();
    shadow.appendChild(this.getStyles());
  }

  populate = () => {
    const { idx, row } = this.data;
    return `
        <div id="row_${idx}" class="row">
            <div class="field">${row.author}</div>
            <div class="field">${row.title}</div>
            <div class="field">${row.description}</div>
        </div>
  `;
  };

  getStyles = () => {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "./components/dataTable/dataRow/dataRow.css");

    return link;
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
      this.render();
    }
  }
}

window.customElements.define("data-row", DataRow);
