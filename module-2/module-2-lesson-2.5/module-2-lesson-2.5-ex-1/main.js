'use strict';

const button = document.querySelector('.btn');

function showtext () {
    document.querySelector('p').innerHTML =  `Mi primer click, ¡ole yo y la mujer que me parió!`;
};


button.addEventListener('click', showtext);
