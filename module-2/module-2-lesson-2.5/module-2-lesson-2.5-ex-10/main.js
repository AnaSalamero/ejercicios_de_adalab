'use strict';

let inception = 'Inception';
let theButterFlyEffect = 'The butterfly effect';
let eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
let blueVelvet = 'Blue velvet';
let split = 'Split';


const btn = document.querySelector('.btn');

function showmovies () {
    const mainpage = document.querySelector('body');
    mainpage.innerHTML += `<ul> <li class="first">${inception}</li> <li class="second">${theButterFlyEffect}</li> <li class="third">${eternalSunshineOfTheSM}</li> <li class="fourth">${blueVelvet}</li> <li class="fifth">${split}</li> </ul>`;

    inception = document.querySelector('.first');
    theButterFlyEffect = document.querySelector('.second');
    eternalSunshineOfTheSM = document.querySelector('.third');
    blueVelvet = document.querySelector('.fourth');
    split = document.querySelector('.fifth');

   inception.addEventListener('click', showmovieinConsole)
   theButterFlyEffect.addEventListener('click', showmovieinConsole)
   eternalSunshineOfTheSM.addEventListener('click', showmovieinConsole)
   blueVelvet.addEventListener('click', showmovieinConsole)
   split.addEventListener('click', showmovieinConsole)

}


btn.addEventListener('click', showmovies);


function showmovieinConsole (event) {
    let selectedmovie = event.currentTarget;
    console.log(selectedmovie.innerHTML);
}
