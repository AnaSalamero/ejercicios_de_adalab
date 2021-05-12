'use strict';


function average (numbers) {
let acumulador = 0;
let media = 0;


for (let i = 0; i < numbers.length; i++) {
    acumulador += numbers[i]; 
    media = acumulador / numbers.length
}

return media

}

console.log(average([2, 2, 2, 2]));