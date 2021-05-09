'use strict';

const pearBasket = {
    maxnumpear : 10,
    minnumpear : 0,
    actualnumpear : 5,
    initialnumpear : 0,
}

pearBasket.add = function () {
    return this.actualnumpear + 1
}

pearBasket.subtract = function () {
    return this.actualnumpear - 1
}

pearBasket.reset = function () {
    return this.initialnumpear
}

console.log(pearBasket.reset());

