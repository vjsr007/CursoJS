const init = () => {
    const root = document.getElementById("root");
    const hello = document.createElement("hello-world");

    hello.setAttribute("message", "Hola soy un componente");

    root.innerHTML = hello.outerHTML;
}

document.addEventListener("DOMContentLoaded", init)