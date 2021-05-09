'use strict';

const adalaber1 = {
 name: 'Susana',
 age: 34,
 job: 'periodista',
};

const page = document.querySelector('body');

page.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} anos y soy ${adalaber1.job}`;

const adalaber2 = {
    name: 'Rocio',
    age: 25,
    job: 'actriz',
   };


page.innerHTML += `<p>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} anos y soy ${adalaber2.job}</p>`;