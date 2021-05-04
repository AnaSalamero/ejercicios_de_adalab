'use strict';

const panel = document.querySelector('div');
const title = document.querySelector('h1');
const text = document.querySelector('p');

if (panel.classList.contains('warning')) {
    title.innerHTML='AVISO';
    text.innerHTML= 'Tenga cuidado';
} else if (panel.classList.contains('error')) {
    title.innerHTML='ERROR';
    text.innerHTML= 'Ha surgido un error';
} else if (panel.classList.contains('success')) {
    title.innerHTML='CORRECTO';
    text.innerHTML= 'Los datos son correctos';
}