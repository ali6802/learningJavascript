"use strict";


let firstName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Steven");
        }, 4000);
    });
};

let lastName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("Hancock");
        }, 3000);
    });
};

let middleName = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("W.");
        }, 7000);
    });
};

Promise.race([firstName(),middleName(),lastName()])
.then(msg=>console.log(msg))
.catch(msg=>console.log(msg));
