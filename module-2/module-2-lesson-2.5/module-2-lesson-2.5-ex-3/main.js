'use strict';

const paragraph = document.querySelector('p');

function addparagraph () {
    paragraph.innerHTML += `Lorem ipsum`
}

paragraph.addEventListener('mouseover', addparagraph);