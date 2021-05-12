'use strict';

const allButtons = document.querySelectorAll('button');
const bodyBackground = document.querySelector('.body');

function handleChangeBackground () {
    bodyBackground.classList.toggle('js-red');
}

allButtons[0].addEventListener('click', handleChangeBackground);
allButtons[1].addEventListener('click', handleChangeBackground);
allButtons[2].addEventListener('click', handleChangeBackground);