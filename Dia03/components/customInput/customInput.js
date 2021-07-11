export class CustomInput extends HTMLElement {
    data = {};
    searchText = ""
  
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
      
      const input = shadow.getElementById("customInput");
      input.onchange = (ev) => {
        this.searchText = ev.currentTarget.value;
      }
    }
  
    render = (shadow) => {
      shadow.innerHTML = this.populate();
      this.getStyles().forEach(style => shadow.appendChild(style));
      this.bindEvents();
    }
  
    populate = () => {
      const data = this.data;
      return (`
        <input type="text" class="customInput" id="customInput" />
      `);
    };
  
    getStyles = () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", "./components/customInput/customInput.css");
  
      return [link];
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
  
  window.customElements.define("custom-input", CustomInput);
  