// the sum of a range
function range(size, first, step){
     let array=[];
     step=Math.abs(step);
     if (size<0){alert("size must bea a positive value"); return null;}
     for (let i=0; i<size; i+=step) array.push(i+1);
     return array;          
}

function sum(array){
     let total=0;
     for (let i of array) total+=i;
     return total;
}

console.log(range(10,1,1));
console.log(sum(ange(10,1,1)));