// Building an iterator for objects
// Objects by default does not have iterators
// creating a generator that is simply an object
// [symbol.iterator] : unique value that will never be duplicated
// the iterator function returns an object
//() calls the function that is going to return the iterator
//iterators have only a single method next() to get out the data

let starwars8={
     title: "The last jedi",
     director: "Rian Johnson",
     year: 2017,
     boxOffice: "1.38"
}
let count=-1;
let SW8={
     [Symbol.iterator]: function(){
          return {
               next: ()=>{
                    count++;
                    switch(count){
                         case 0:
                              return {
                                   value: starwars8.title,
                                   done: false}
                         case 1:
                              return{
                                   value:starwars8.year,
                                   done: false}
                         case 2:
                              return{
                                   value: starwars8.director,
                                   done: false}
                         case 3:
                              return{
                                   value: undefined,
                                   done: true}
                         default:
                              return{
                                   value: undefined,
                                   done: true}
                    }
               }
          }
     }
}
let data = SW8[Symbol.iterator]();
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());