let test ={name: `julis`, age: 26, hasOwnProperty: false};
console.log({}.hasOwnProperty.call(test,"name"));//true
console.log(Object.hasOwnProperty.call(test,"name"));//true
console.log(hasOwnProperty.call(test,"name"));//true