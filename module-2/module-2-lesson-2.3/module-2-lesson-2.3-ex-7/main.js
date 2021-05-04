'use strict';

let ingredient = 'Espinacas';

switch (ingredient) {
    case 'Pollo':
        console.log('Tu ingrediente es Pollo. Puedes freirte un filete con patatas');
    break;

    case 'Merluza':
        console.log('Tu ingrediente es Merluza. Puedes freirte una merluza en salsa verde');
    break;

    case 'Espinacas':
        console.log('Tu ingrediente es Espinacas. Puedes freirte unas espinacas rehogadas');
    break;

    default:
        console.log('Nada en la nevera');
}