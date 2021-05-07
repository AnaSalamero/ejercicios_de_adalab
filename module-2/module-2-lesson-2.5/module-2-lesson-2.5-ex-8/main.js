'use strict';

const button = document.querySelector('.btn');


const button2 = document.querySelector('.btn2');


function changecolor (event) {
    const selectedButton = event.currentTarget;

    selectedButton.classList.toggle('js-color');
}


button.addEventListener('click', changecolor);


button2.addEventListener('click', changecolor);