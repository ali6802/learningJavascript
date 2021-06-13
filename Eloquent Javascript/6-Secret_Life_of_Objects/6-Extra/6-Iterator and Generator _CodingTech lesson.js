//spread operator
const arr=[1,2,3];
console.log(...arr);
//yield will pause the code until the next function is called
function* count(){
     let num=yield;
     yield 1+num;
     yield 2+num;
     yield 3+num;
     yield 3;
     
   }
   var generator = count();
   console.log(generator.next());
   console.log(generator.next(1));
   console.log(generator.next());
   console.log(generator.next());
   console.log(generator.next());
   console.log(generator.next());
   console.log(generator.next());
   console.log(generator.next());

   function* outer(){
        yield 1;
        yield* inner();
        yield 2;
   }
   function* inner(){
        yield "a";
        yield "b";
   }
   var generator=outer();

   /*Arrays, Strings, Map, Sets, Generators
   Iterable protocol
   #1 Iterable key: [Symbol.iterator]
   sets up an object that is going to be pointed at an iterator


   Symbol("key") Anonnymous unique value

   #2 Iterator: any object with implements the iterator protocol
   function fakeIterator (){
        return {
             next:function(){
                  //return object
                  //with a value
                  //and a done key

          }
        };
     }
     */

     function iterator(){
          let step=0;
          return {
               next: ()=>{
                    step++;
                    if (step===1){
                         return {
                              value: 'embarrassed',
                              done: false};
                    }
                    if (step===2){
                         return {
                              value: 'annoyed',
                              done: false};
                    }
                    if (step===3){
                         return {
                              value: 'angry',
                              done: false};
                    }
                    return {
                         value: undefined,
                         done: true};
               }
          };
     }
const output={};
output[Symbol.iterator]= iterator;
const test=[...output];
console.log(test);