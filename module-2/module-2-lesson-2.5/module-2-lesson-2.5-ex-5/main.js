'use strict';

const pagecolor = document.querySelector('body');


function changecolors (event) {
    if (event.key === 'r' ) {
        pagecolor.classList.add('color1');
        pagecolor.classList.remove('color2');
    } else if (event.key === 'm') {
        pagecolor.classList.add('color2');
    }
}


document.addEventListener('keydown', changecolors);

// r red , m pruple