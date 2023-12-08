function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById("ele1");

    ele.addEventListener("click", function () {
        pintar(ele, 'yellow');
    });
});
