'use strict';

const button = document.querySelector('.btn');


function showmessage () {
    const valueinput = document.querySelector('.input').value
    console.log (`Hola ${valueinput}`);
}


button.addEventListener('click', showmessage);