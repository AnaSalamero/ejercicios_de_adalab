'use strict';

const firstLink = document.querySelector('.firstlink');
const secondLink = document.querySelector('.secondlink');
const thirdLink = document.querySelector('.thirdlink');

function prevent (event) {
 const selectedLink = event.currentTarget;
 event.preventDefault();
}

firstLink.addEventListener('click', prevent);
secondLink.addEventListener('click', prevent);
thirdLink.addEventListener('click', prevent);