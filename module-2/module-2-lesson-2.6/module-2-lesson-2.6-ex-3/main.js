'use strict';

const adalaber1 = {
 name: 'Maria',
 age: 34,
 job: 'periodista',
 };

 adalaber1.showBio = function () {
     return (`Mi nombre es ${this.name}, tengo ${this.age} anos y soy ${this.job}.`);
 };


console.log(adalaber1.showBio());


const adalaber2 = {
    name: 'Rocio',
    age: 25,
    job: 'actriz',
   };

adalaber2.showBio = function () {
return (`Mi nombre es ${this.name}, tengo ${this.age} anos y soy ${this.job}.`)
};

console.log(adalaber2.showBio());


