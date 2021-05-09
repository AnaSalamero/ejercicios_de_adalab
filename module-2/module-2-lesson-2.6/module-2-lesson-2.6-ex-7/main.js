'use strict';


const user = {};

const job = 'developer';


user.firstName = 'Laura';
user.lastName = 'Perez';
user.age = 19;
user.job = job;

console.log(user.firstName)

user.age= 20;
user.firstName = 'Sara';

console.log(user.age)
console.log(user.firstName)
