'use strict';

function getEl (a) {
    let select = document.querySelector(a);
    return select;
}

const btnEL = getEl(".paragraph");

console.log(btnEL);