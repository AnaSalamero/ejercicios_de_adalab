'use strict';

const button = document.querySelector('.btn');


function changecolor () {
    button.classList.toggle('js-color');
}


button.addEventListener('click', changecolor);