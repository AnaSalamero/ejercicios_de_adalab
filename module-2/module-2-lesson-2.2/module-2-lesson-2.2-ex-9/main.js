'use strict';

const showHtml = document.querySelector('.main');
const nam = 'Natalia';
const surname = 'Lopez';
showHtml.innerHTML = `El nombre de mi companera es ${nam} ${surname}, y esta compuesto por ${nam.length + surname.length} caracteres`;