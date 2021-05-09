'use strict';

const adalaber1 = {
 name: 'Susana',
 age: 34,
 job: 'periodista',
 }

adalaber1.run = () => 'Estoy corriendo';

/*  ANONYMOUS FUNCTION - it is possible the use of 'this'

    adalaber1.run = function() {  
        return (`Estoy corriendo`);
    }; */ 

adalaber1.runAMarathon = distance => `Estoy corriendo un maraton de ${distance} kilometros`;

console.log(adalaber1.runAMarathon(50));
console.log(adalaber1.run());
