'use strict';

const teacherIsra = document.querySelector('.teacher--isra');
const teacherTuerto = document.querySelector('.teacher--tuerto');
const teacherNasi = document.querySelector('.teacher--nasi');


function handleclass (event) {
    let selectedImg = event.currentTarget;
    selectedImg.classList.toggle('teacher--selected');

    if (selectedImg.classList.contains('teacher--selected')) {
    selectedImg.querySelector('.favorite').innerHTML = 'Quitar';
    } else {
        selectedImg.querySelector('.favorite').innerHTML = 'Anadir';
    }
}

teacherIsra.addEventListener('click', handleclass);
teacherTuerto.addEventListener('click', handleclass);
teacherNasi.addEventListener('click', handleclass);
