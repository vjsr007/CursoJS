const init = () => {
    const hello = document.getElementById("hello");
    hello.setAttribute("message", "Hola soy un componente")
}

document.addEventListener("DOMContentLoaded", init)