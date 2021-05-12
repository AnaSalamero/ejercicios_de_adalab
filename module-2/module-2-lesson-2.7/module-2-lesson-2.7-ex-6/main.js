'use strict';

const form = document.querySelector('form');

function handleinput (event) {
   event.preventDefault();
console.log(event)
    let input1 = event.target[0];
    let input1Value = input1.value;
    let input2 = event.target[1]
    let input2Value = input2.value;

    let favouritemovies = [input1Value, input2Value];


    for (const movie of favouritemovies) {
        console.log(`¡A mí también me encantó "${movie}"! Tenemos mucho en común, humana.`)
    }

}

form.addEventListener('submit', handleinput);


