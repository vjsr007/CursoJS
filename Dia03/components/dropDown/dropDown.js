export class DropDown extends HTMLElement {
  data = null;
  id = "id";
  open = false;
  defaultText = "[Select an option]";
  currentOption = {
    id: -1,
    text: this.defaultText,
  };

  static get observedAttributes() {
    return ["data", "id"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.render(shadow);
  }

  changeOption = (ev) => {
    const shadow = this.shadowRoot;
    const input = shadow.getElementById("input");
    input.textContent = ev.currentTarget.textContent;

    this.currentOption = {
      id: ev.currentTarget.id,
      text: ev.currentTarget.textContent,
    };

    this.toggle();
  };

  toggle = (ev, hide = false) => {
    const shadow = this.shadowRoot;
    this.open = !this.open;

    if (hide) this.open = false;

    const options = shadow.getElementById("options");
    if (options) options.style.display = this.open ? "inline" : "none";

    const toggleIcon = shadow.getElementById("toggleIcon");
    if (toggleIcon)
      toggleIcon.setAttribute(
        "class",
        this.open ? "fa fa-sort-asc" : "fa fa-sort-desc"
      );

    const btnToggle = shadow.getElementById("btnToggle");
    if (btnToggle)
      btnToggle.setAttribute("class", this.open ? "button up" : "button down");
  };

  bindEvents = () => {
    const shadow = this.shadowRoot;

    const input = shadow.getElementById("input");
    if (input) input.onclick = this.toggle;

    const list = shadow.getElementById("component");
    if (list) list.onblur = (ev) => this.toggle(ev, true);

    const options = shadow.querySelectorAll("div.option");
    if (options)
      options.forEach((option) => (option.onclick = this.changeOption));
  };

  render = (shadow) => {
    shadow.innerHTML = this.populate();
    this.getStyles().forEach((style) => shadow.appendChild(style));
    this.bindEvents();
  };

  getOptions = (data) => {
    if (!data) return "";
    const options = data.map((option, idx) => {
      return `
        <div title="${option.name}" id="${option.id}" class="option">${option.name}</div>
        `;
    });

    return `<div title="${this.defaultText}" id="-1" class="option">${
      this.defaultText
    }</div>${options.join("")}`;
  };

  showLoader = () => {
    const loader = document.createElement("custom-loader");
    loader.setAttribute("default-loader", "spin");
    return loader.outerHTML;
  };

  renderIcon = (data) => {
    return data !== null
      ? `
        <i id="toggleIcon" class="fa fa-sort-desc" aria-hidden="true"></i>
      `
      : this.showLoader();
  };

  populate = () => {
    const data = this.data;
    return `
          <div tabindex="0" id="component" class="component">
            <div id="input" class="input">${this.defaultText}</div>
            <div id="btnToggle" class="button down">
              ${this.renderIcon(data)}
            </div>
            <div id="options" class="options">
            ${this.getOptions(data)}
            </div>            
          </div>
      `;
  };

  getStyles = () => {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "./components/dropDown/dropDown.css");

    const fontAwesome = document.createElement("link");
    fontAwesome.setAttribute("rel", "stylesheet");
    fontAwesome.setAttribute(
      "href",
      "./lib/fontawesome/css/font-awesome.min.css"
    );

    return [link, fontAwesome];
  };

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      switch (name) {
        case "data":
          this.data = JSON.parse(newVal);
          break;
        case "id":
          this.id = newVal;
          break;
        default:
      }
      const shadow = this.shadowRoot;
      this.render(shadow);
    }
  }
}

window.customElements.define("drop-down", DropDown);
