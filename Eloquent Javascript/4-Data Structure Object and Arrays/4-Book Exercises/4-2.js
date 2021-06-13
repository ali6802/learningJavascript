// my answer
let array=[1, 2, 3, 4, 5, 45, "3", 13, 22];
function reverseArray(array){
let reverse=[];
for (i=array.length-1; i>=0; i--){
  reverse.push(array[i]);  
}
return reverse;
}
console.log(reverseArray(array));
// reverse in the same array
let N=[1, 2, 3, 4, 5, 6, 7, 8, 9];

function Reverse(array){
     var inter;
     for (i=0; i<Math.floor(array.length/2);i++){
          inter=array[i];
          array[i]=array[array.length-1-i];
          array[array.length-1-i]=inter;
     }
     return array;
}
console.log(Reverse(N));








