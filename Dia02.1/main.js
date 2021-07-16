const init = () => {
    const root = document.getElementById("root");

    const hello = document.createElement("hello-world");
    const hello2 = document.createElement("hello-world");
    const hello3 = document.createElement("hello-world");

    hello.setAttribute("message", "Hola soy un componente 1");

    root.appendChild(hello);

    hello2.setAttribute("message", "Hola soy un componente 2");

    root.appendChild(hello2);

    hello3.setAttribute("message", "Hola soy un componente 3");

    root.appendChild(hello3);
}

document.addEventListener("DOMContentLoaded", init)