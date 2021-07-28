var isOpen = false;

function toggle() {
    const list = document.getElementById("list")

    list.style.display = isOpen ? 'none' : 'flex'
    isOpen = !isOpen
}

function selectOption(event) {
    const input = document.getElementById("input")

    input.innerHTML = event.target.innerHTML

    toggle();
}

function initApp() {
    const input = document.getElementById("input")
    const options = document.getElementsByClassName("option")

    input.addEventListener('click', toggle)

    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener('click', selectOption)
    }
}
/*
function initApp() {
    const input = document.getElementById("input")
    const options = document.getElementsByClassName("option")

    input.addEventListener('click', toggle)

    Array.from(options).forEach(option => {
        option.addEventListener('click', selectOption)
    });
}
*/
document.addEventListener('DOMContentLoaded', initApp)