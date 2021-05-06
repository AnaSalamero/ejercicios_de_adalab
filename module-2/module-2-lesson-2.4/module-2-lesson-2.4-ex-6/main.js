'use strict';

function getEl (selector) {
    const element = document.querySelector(selector);
    console.log(element);
    if (element === null) {
        console.error(`No existe ningun elemento con clase, id o tag llamado ${selector}`);
    };
    return element;
}

const btnEL = getEl('h3');

console.log(btnEL);