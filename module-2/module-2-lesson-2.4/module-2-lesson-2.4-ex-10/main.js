'use strict';


function calculator (a, b, c, d) {
    const width = b;
    const padding = c;
    const border = d;
    let widthtotal;
    let widthcontent;

    if (a === 'border-box') {
    widthcontent = width;
    widthtotal = widthcontent + padding + border;
    } else  if (a === 'box-sizing'){
    widthtotal = width;
    widthcontent = widthtotal - padding - border;
    }

    const result = `El ancho del contenido es: ${widthcontent}px y el ancho total de la caja es: ${widthtotal}px`;
    return result;
};

const resultcalculator = calculator('border-box',500,15,10);

console.log(resultcalculator);

/*
si no es border box 
width = ancho del contenido 
width + padding + border = ancho total


si es border box
width - padding - border = ancho del contenido 
width = ancho total
*/