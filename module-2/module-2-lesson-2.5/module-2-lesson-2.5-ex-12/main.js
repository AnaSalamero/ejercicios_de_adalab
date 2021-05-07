'use strict';

// event delegation

const teachersAll = document.querySelector('.teachers')

function selection (event) {
    let li = event.target.closest('li');

    li.classList.toggle('teacher--selected');

    if (li.classList.contains('teacher--selected')) {
        li.querySelector('.favorite').innerHTML = 'Quitar';
        } else {
            li.querySelector('.favorite').innerHTML = 'Anadir';
        }
}

teachersAll.addEventListener('click', selection);



// const teacherIsra = document.querySelector('.teacher--isra');
// const teacherTuerto = document.querySelector('.teacher--tuerto');
// const teacherNasi = document.querySelector('.teacher--nasi');


// teacherIsra.addEventListener('click', handleclass);
// teacherTuerto.addEventListener('click', handleclass);
// teacherNasi.addEventListener('click', handleclass);


