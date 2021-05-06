'use strict';

function getEl (a) {
    const select = document.querySelector(a);
    if (select === null) {
        console.error(`No existe ningun elemento con clase, id o tag llamado ${a}`);
    };
    return select;
}


const even = a => {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

// console.log(evenandodd(7));


const btnEL = getEl('p');

console.log(btnEL.innerHTML);

const newvar = parseInt(btnEL.innerHTML);

console.log(`este numero es par: ${even(newvar)}`);