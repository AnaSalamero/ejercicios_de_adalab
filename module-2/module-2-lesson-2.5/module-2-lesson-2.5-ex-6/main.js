'use strict';

const inputElement = document.querySelector('input');

function introduceintop(event) {
  const inputHtml = event.currentTarget;
  document.querySelector('p').innerHTML = inputHtml.value;

}

inputElement.addEventListener('keyup', introduceintop);

