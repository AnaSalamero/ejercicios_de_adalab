'use strict';


function calculatetax (a) {
    const pricewithout = a;
    const iva = 2.1;
    return `Precio sin IVA: ${pricewithout}, IVA: ${iva}, y Total: ${pricewithout + iva}`;
}

const calculationtaxes = calculatetax (30);

console.log(calculationtaxes);