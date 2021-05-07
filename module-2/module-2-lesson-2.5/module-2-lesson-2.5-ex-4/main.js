'use strict';

let container = document.querySelector('div');

function changecolors () {
    if (window.scrollY > 250) {
    container.classList.add('container_color2');
} else {
    container.classList.remove('container_color2');
}
}

window.addEventListener('scroll', changecolors);

