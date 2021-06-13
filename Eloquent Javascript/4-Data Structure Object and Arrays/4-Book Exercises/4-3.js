// array to list
let N= [29, 23, 43];
function arrayToList(array) {
     var list = null;
     for (var i = array.length - 1; i >= 0; i--)
       list = {value: array[i], rest: list};
     return list;
}
let NList=arrayToList(N);
console.log(NList);
//list to array
function listToArray(list){
     let array = [];
     for (let node=list; node; node=node.rest){
          array.push(node.value);
     }
     return array;
}
let NBack=listToArray(NList);
console.log(NBack);
//includes a new element on a list
let N= {value: 30, rest: {value: 20, rest: {value: 10, rest: null}}};
function prepEnd(value, list) {
  return {value, rest: list};
}
console.log(prepEnd(50, N));
//returns the element at a given position
let N= {value: 30, rest: {value: 20, rest: {value: 10, rest: null}}};
function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}
// list size
let N= {value: 30, rest: {value: 20, rest: {value: 10, rest: null}}};
function listSize (list, count=1){
     if (list.rest==null){
          return count;
     }
     else return listSize(list.rest, count+=1);
     
}
console.log(listSize(N));
