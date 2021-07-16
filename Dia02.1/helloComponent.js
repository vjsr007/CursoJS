export class HelloComponent extends HTMLElement {
    static get observedAttributes() {
        return [ 'message' ];
    }

    message = "Hello I'm a component";

    render = (shadow) => {
        shadow.innerHTML = `
            <h1>${this.message}</h1>
        `;

        const link = document.createElement("link");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", "./helloComponent.css");

        shadow.appendChild(link)
    }

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        this.render(shadow)
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) {
          switch(name) {
              case 'message':
                  this.message = newVal;
                  break;
         }

         const shadow =  this.shadowRoot;

         this.render(shadow)
       }
     }
}

window.customElements.define('hello-world', HelloComponent);