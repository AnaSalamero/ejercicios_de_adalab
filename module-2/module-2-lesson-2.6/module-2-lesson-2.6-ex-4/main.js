'use strict';

const button = document.querySelector('.btn');

function handlerlog (event) {
    console.log(event)
};

button.addEventListener('click', handlerlog);



