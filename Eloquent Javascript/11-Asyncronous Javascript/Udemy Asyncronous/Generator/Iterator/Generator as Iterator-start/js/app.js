"use strict";

let arr = ['a', 'b', 'c', 'd'];
//let it=arr[Symbol.iterator]();
const arrIt=function*(arr){
     for (let i of arr){
          yield i;
     }
}
let it=arrIt(arr);




console.log("Remaining Code.");
