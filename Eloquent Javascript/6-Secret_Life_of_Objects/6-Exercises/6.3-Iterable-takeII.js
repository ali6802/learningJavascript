/*
Exercise 3 requires us to make the Group class from Exercise 2 iterable. It took me a minute to realize that this was really a two part problem. First, I had to create the GroupIterator class. Second, I had to replace the Group Symbol.iterator with the newly created GroupIterator.

Even after reaching this solution I still felt like there was JavaScript magic going on. Some part of the language specification was smart enough to know that a Symbol.iterator with a next method should work with a for...of loop.

According to ECMAScript 2015:
The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), and potentially a return value when all values have been generated. An object is an iterator when it implements a next() method with (some additional) semantics.
*/
//Class Group previous exercise
class Group {
     constructor(){
          this.content=[];
     }
     has(value){
          return this.content.includes(value);
     }
     add(value){
          if (!this.has(value)){
               this.content.push(value);
          }
     }
     delete(value){
          this.content=this.content.filter(i=>i!==value);
     }
     //smarter option I developed myself
     addArray(array){
          for (let value of array){
               this.add(value);
          }
     }
     //dumb funtion the question exercise demands you to do
     static from(array){
          let groupFrom= new Group;
          for (let value of array){
               groupFrom.add(value);
          }
          return groupFrom;
     }
}
// class GroupIterator
class GroupIterator{
     constructor(group){
          this.content=group.content;
          this.index=-1;
     }
     next(){
          this.index++;
          if (this.index===this.content.length) return {done: true};
          else return {value: this.content[this.index], done: false};
         
     }
}
//Assigns the [Symbol.iterator] of the Group class a function that returns its Iterable object
Group.prototype[Symbol.iterator] = function() {
     return new GroupIterator(this);
 }
 //
 for (let value of Group.from(["a","b","c"])) {
   console.log(value);
 }