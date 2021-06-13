/*
ES6 introduces a new mechanism for traversing data: iteration. Two concepts are central to iteration:
An iterable is a data structure that wants to make its elements accessible to the public. It does so by implementing a method whose key is Symbol.iterator. That method is a factory for iterators.
An iterator is a pointer for traversing the elements of a data structure (think cursors in databases)
*/
const Iterable = {
     [Symbol.iterator]() {
         let step = 0;
         const iterator = {
             next() {
                 step++;
                 if (step === 1)
                     return { value: 'Example', done: 'false' }
                 else if (step === 2)
                     return { value: 'for', done: 'false' }
                 else if (step === 3)
                     return { value: 'Iterator', done: 'false' }
                 return { value: undefined, done: 'true' }
             }
         };
         return iterator;
     }
 }
var iterator = Iterable[Symbol.iterator]();
//alternative version
const Iterable = {
     [Symbol.iterator]:function() {
         let step = 0;
         // returns an iterator object that has a method called next which will return an object with keys value and done
         return {
             next:()=>{
                 step++;
                 if (step === 1)
                     return {value:'Example', done:'false'};
                 else if (step === 2)
                     return {value:'for', done:'false'};
                 else if (step === 3)
                     return { value:'Iterator', done:'false'};
                 return { value: undefined, done:'true'};
             }
         };         
     }
}
var iterator = Iterable[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

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
/*
Iterator lesson Fun Fun Funciton channel
*/
//quokka
//provides an iterator for an array iteration
const N=[20,25,49,21,56,9,15,22];
//Iterable object
const Iterable={
     [Symbol.iterator]:function(obj){
          let index=-1;
          let length=obj.length;
          return{               
               next:()=>{
                    index++;
                    switch(true){
                         case (obj[index]%7==0):
                              return{
                                   value: obj[index]+7,
                                   done: false};
                              break;
                         case (obj[index]%5==0):
                              return{
                                   value:obj[index]+5,
                                   done:false};
                              break;
                         case (obj[index]%3==0):
                              return{
                                   value:obj[index]+3,
                                   done:false};
                              break;
                         case (obj[index]%2==0):
                              return{
                                   value:obj[index]+2,
                                   done:false};
                              break;
                         case (obj[index]<length):
                              return{
                                   value:obj[index],
                                   done:false};
                              break;
                         default:
                              return{
                                   value:undefined,
                                   done:true};                        
                    }                    
               }
          };
     }
}
let iterator=Iterable[Symbol.iterator](N);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//Book lesson according to my terms
//String test
let test="OK"
//Iterable object
const Iterable={
     [Symbol.iterator]:function(array){
          let index=-1;
          return{
               next:()=>{
                    index++;
                    if (array[index]===undefined){
                         return{
                              value: undefined,
                              done: true};
                    } else {
                         return{
                              value: array[index],
                              done: false};
                    }
               }
          };
     }
}
let iterator=Iterable[Symbol.iterator](test);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//Book lesson as it is
let test="OK.";
//returns indefined in case the array is finished
let iterator=test[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//
class Matrix {
constructor(width, height, element=(x,y)=>undefined) {
this.width = width;
this.height = height;
this.content = [];
for (let y = 0; y < height; y++) {
     for (let x = 0; x < width; x++) {
     this.content[y * width + x] = element(x, y);
          }
     }
}
get(x, y) {
return this.content[y * this.width + x];
}
set(x, y, value) {
this.content[y * this.width + x] = value;
     }
}
     
     class MatrixIterator {
     constructor(matrix) {
     this.x = 0;
     this.y = 0;
     this.matrix = matrix;
     }
     next() {
     if (this.y == this.matrix.height) return {done: true};
     let value = {x: this.x,
     y: this.y,
     value: this.matrix.get(this.x, this.y)};
     
     
     this.x++;
     if (this.x == this.matrix.width) {
     this.x = 0;
     this.y++;
     }
     return {value, done: false};
     }
}
     
     Matrix.prototype[Symbol.iterator] = function() {
     return new MatrixIterator(this);
     };
     let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
     for (let {x, y, value} of matrix) {
     console.log(x, y, value);
     }
