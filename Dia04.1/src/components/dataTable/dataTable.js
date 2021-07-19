export class DataTable extends HTMLElement {
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
    link.setAttribute("href", "./components/dataTable/dataTable.css");

    return [link];
  };

  render = (shadow) => {
    shadow.innerHTML = this.populate();
    this.getStyles().forEach(style => shadow.appendChild(style));
  }

  populateRows = (data) => {
    const rows = data.map((row,idx) => {
        const dataRow = document.createElement("data-row");
        dataRow.setAttribute("data", JSON.stringify({row, idx}));

        return dataRow.outerHTML;
    })

    return rows.join("")
  };

  populate = () => {
    return this.data !== null
      ? `
            <div class="main">
                <div class="columns">
                    <div class="columns">Source</div>
                    <div class="columns">Author</div>
                    <div class="columns">Title</div>
                    <div class="columns">Description</div>
                </div>
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

window.customElements.define("data-table", DataTable);
