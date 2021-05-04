'use strict';

let dogyears = 12;

const firstyear = 15;
const secondyear = 9;
const thirdyear = 5;



if (dogyears === 1) {
    console.log(`Tu perro tiene ${firstyear} años`)
} else if (dogyears === 2) {
    console.log(`Tu perro tiene ${firstyear + secondyear} años`)
} else if (dogyears === 3) {
    console.log(`Tu perro tiene ${firstyear + secondyear + thirdyear} años`)
} else if (dogyears >= 4) {
    console.log(`Tu perro tiene ${firstyear + secondyear + thirdyear + ((dogyears-3)*5)} años`)
}