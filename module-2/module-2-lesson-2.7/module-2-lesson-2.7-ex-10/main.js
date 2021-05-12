'use strict';

const items = [
    'Ada',
    1815,
    ['Informática', 'Matemática', 'Escritora'],
    {
      mother: 'Anna Isabella',
      father: 'Lord Byron'
    }
  ];


function paintConsole () {
    for (let i = 0; i < items.length; i++) {
        if (i <= 2) {
        console.log (`El dato ${items[i]} esta en la posicion ${[i]} y es de tipo ${typeof items[i]}`) }

        else {
        console.log (`El dato ${items[i].mother + ` y ` + items[i].father} esta en la posicion ${[i]} y es de tipo ${typeof items[i]}`) }
        
        
    } 
}

console.log(paintConsole());