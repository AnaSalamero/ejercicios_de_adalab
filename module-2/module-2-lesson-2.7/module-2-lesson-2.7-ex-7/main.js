'use strict';

const students = [
 {
    name: 'Maria',
    age: 29,
    job: 'designer'
 },
 {
    name: 'Lucia',
    age: 31,
    job: 'chemical engineer'
 },
 {
    name: 'Susana',
    age: 34,
    job: 'journalist'
 },
 {
    name: 'Rocio',
    age: 25,
    job: 'actress'
 },
 {
    name: 'Inmaculada',
    age: 21,
    job: 'designer'
 },
];


/* NOT USED, BUT IT IS AN ARRAY WITHIN AN OBJECT

const adalab = {
    name: 'Study at a bootcamp',
    participants: ['Maria', 'Lucia', 'Susana', 'Rocio', 'Inmaculada']
};

*/



// function countAdalabers

function countAdalabers () {
    return students.length;
};                                                         
console.log(countAdalabers());



// function averageAge

function averageAge () {

   const numberStudents = students.length;

   let totalAge = 0;

   for (let i = 0; i < students.length; i++) {
      totalAge += students[i].age;
    };
    return totalAge / numberStudents; //RETURN GOES OUTSIDE FOR
    
};

console.log(averageAge())


/* ANOTHER WAY OF DOING IT: USING FOR CONST OF

function averageAgeFunction () {
   let totalAge = 0;
   for (const averageAge of adalabers) {
      totalAge = totalage + averageAge.age
   }
   return totalAge / numberStudents

}
*/



// function theYoungest

function minimunAge () {

   let ageOfStudents = 120;
   for (let i = 0; i < students.length; i++) {
      if (students[i].age < ageOfStudents) {
         ageOfStudents = students[i].age;
      }
   }
   return ageOfStudents;
}

console.log(minimunAge())

/* ANOTHER WAY OF DOING IT: USING FOR CONST OF

function minimAge () {
let minAge = students[0].age;

for (const studentage of students) {
   if (studentage.age < minAge) {
      minAge = studentage.age;
   }
}
return minAge
}

console.log(minimAge())
*/



// function countDesigners

function countDesigners () {
   let numberDesigners = 0;
   for (let i = 0; i <students.length; i++) {
      if (students[i].job === 'designer')
      numberDesigners++
   }
   return numberDesigners;
}

console.log(countDesigners());