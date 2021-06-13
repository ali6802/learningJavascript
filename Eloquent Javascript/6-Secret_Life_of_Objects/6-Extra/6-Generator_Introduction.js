/*
You can think of generators as processes (pieces of code) that you can pause and resume while executing a particular code.
Note the new syntax: function* is a new “keyword” for generator functions (there are also generator methods). yield is an operator with which a generator can pause itself. Additionally, generators can also receive input and send output via yield.

*/
//a simple use of generators;
function* increment(i){
     yield i+1;
     yield i+2;
}
let obj=increment(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
//There are four kind of generators
//1-Generator function declarations
function* increment(i){
     yield i+1;
     yield i+2;
}
let obj=increment(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
//2-Generator function expressions
let increment=function*(i){
     yield i+1;
     yield i+2;
}
let obj=increment(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
//3-Generator method definitions in object literals
let increment={
     *generatorMethod(i){
          yield i+1;
          yield i+2;
     }
};
let obj=increment.generatorMethod(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
//4-Generator method definitions in class definitions
class increment{
     *generatorMethod(i){
          yield i+1;
          yield i+2;
     }
}
let myInc = new increment();
let obj=myInc.generatorMethod(10);
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
