export class PagerComponent extends HTMLElement {
  page = 1;
  pageSize = 20;
  numberOfItems = 0;
  goToFirst = () => {};
  goToPrevious = () => {};
  goToNext = () => {};
  goToLast = () => {};

  static get observedAttributes() {
    return ["page", "pagesize", "numberofitems"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.render(shadow);
  }

  bindEvents = () => {    
    const shadow = this.shadowRoot;

    const btnFirst = shadow.getElementById("btnFirst");
    const btnPrevious = shadow.getElementById("btnPrevious");
    const btnNext = shadow.getElementById("btnNext");
    const btnLast = shadow.getElementById("btnLast");

    btnFirst.addEventListener("onclick", this.goToFirst);
    btnPrevious.addEventListener("onclick", this.goToPrevious);
    btnNext.addEventListener("onclick", this.goToNext);
    btnLast.addEventListener("onclick", this.goToLast);
  };

  render = (shadow) => {
    shadow.innerHTML = this.populate();
    this.getStyles().forEach((style) => shadow.appendChild(style));
    this.bindEvents();
  };

  populate = () => {
    return `
          <div class="component">
            <div id="btnFirst" title="first" class="button" ><</div>
            <div id="btnPrevious" title="previous" class="button" ><<</div>
            <div title="current page" class="button input" >${this.page}</div>
            <div id="btnNext" title="next" class="button" >>></div>
            <div id="btnLast" title="last" class="button" >></div>
          </div>
      `;
  };

  getStyles = () => {
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "./components/pagerComponent/pagerComponent.css");

    return [link];
  };

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      switch (name) {
        case "page":
          this.page = newVal;
          break;
        case "pagesize":
          this.pageSize = newVal;
          break;
        case "numberofitems":
          this.numberOfItems = newVal;
          break;
        default:
      }
      const shadow = this.shadowRoot;
      this.render(shadow);
    }
  }
}

window.customElements.define("pager-component", PagerComponent);
