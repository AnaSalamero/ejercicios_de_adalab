'use strict';

const day = 24;
const daysperyear = 365
const age = document.querySelector('p');

let result = document.querySelector('h1');
result.innerHTML = parseInt(age.innerHTML) * day * daysperyear;