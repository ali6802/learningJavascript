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