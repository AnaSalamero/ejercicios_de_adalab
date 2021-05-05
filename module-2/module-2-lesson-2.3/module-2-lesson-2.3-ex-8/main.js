'use strict';

let actualyear = 2020;


if (actualyear % 4 === 0) {
    console.log(`${actualyear} is a leap year`)
} else if (actualyear % 4 === 1) {
    console.log(`there is a leap year in 3 more years, in year ${actualyear + 3}`)
} else if (actualyear % 4 === 2) {
    console.log(`there is a leap year in 2 more years, in year ${actualyear+2}`)
} else if (actualyear % 4 === 3) {
    console.log(`there is a leap year in 1 more years, in year ${actualyear+1}`)
};

