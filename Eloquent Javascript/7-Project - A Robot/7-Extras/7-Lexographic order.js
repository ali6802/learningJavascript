/*
Returns all the possible permutations for an array
Quora algorithm: https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
*/
let array=[1,2,3];
//
function permutation(array){
     let A=[];
     for (let element of array){
          A.push(element);
     }
     let I=-1;
     for (i=0; i<A.length-1;i++){
          if (A[i]<A[i+1]) I=i;
     }
     if (I==-1) return false;
     let J=-1;
     for (j=0; j<A.length;j++){
          if (A[I]<A[j]) J=j;
     }
     //swap
     let temp=A[I];
     A[I]=A[J];
     A[J]=temp;
     //reverse
     let end=A.splice(I+1);
     end.reverse();
     A=A.concat(end);
     return A;              
}
console.log(array);
//Permutation iterator
let array=[1,2,3];
const Permutation={
     [Symbol.iterator]:function(array){
          //A must needed adaptation since the splice method changes the array
          let A=[];
          for (element of array){
               A.push(element);
          }
          return {
               next:()=>{
                    //step 1: The largest i such that A[i]<A[i+1]
                    let I=-1;
                    for (i=0; i<A.length-1; i++){
                         if (A[i]<A[i+1]) I=i;
                    }
                    //returns the original array. Then, all permutation possible are covered
                    if (I==-1) return {value: array, done: true};
                    //step 2: the largest j such that A[I]<A[j]
                    let J=-1;
                    for (j=0; j<A.length; j++){
                         if (A[I]<A[j]) J=j;                    
                    }
                    //swap
                    let temp=A[I];
                    A[I]=A[J];
                    A[J]=temp;
                    //reverse
                    let end=A.splice(I+1);
                    end.reverse();
                    A=A.concat(end);
                    //return Permutaion of the array
                    return {value: A, done: false};
               }
          };
     }
}
//
let permutation=Permutation[Symbol.iterator](array);
console.log(permutation.next());