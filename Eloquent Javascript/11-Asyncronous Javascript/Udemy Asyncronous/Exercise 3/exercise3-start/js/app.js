"use strict";

//First, add the setTimeout code as shown in the intro to this exercise. Then modify the code by creating a promise so that the code can run asynchronously.

const massiveProcess = function(num) {
    return new Promise((resolve,reject)=>{
        if (isNaN(num)) reject("Not a number");
        else{
            let result = 0; 
    setTimeout(function() {
        for (let i = num ** 7; i >= 0; i--) {        
            result += Math.atan(i) * Math.tan(i);
        };
        resolve(result);
    },0);
        }
    })    
};

massiveProcess(10)
.then(amt=>console.log("The number is: "+ amt))
.catch(msg=>console.error(msg));


//More processing later on
console.log(5 * 5 + 100);
