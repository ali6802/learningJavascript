// functions that change to other functions
const adrian = {
     fullName: 'Adrian Oprea',
     occupation: 'Software developer',
     age: 31,
     website: 'https://oprea.rocks'
 };

const bill = {
     ... adrian,
     fullName: "Bill Gates",
     website: "https://microsoft.com"
};
console.log(bill);

//

function noisy(f) {
     return (...args) => {
     console.log("calling with", args);
     let result = f(...args);
     console.log("called with", args, ", returned", result);
     return result;
     };
}
let newFunction = noisy(Math.min);

//adaptation of math.min

function operation(f) {
     return (...args) => {
          let result = f(...args);
          console.log("called with", args, ", returned", result);
}
}
operations(Math.min)(3,2,1);

