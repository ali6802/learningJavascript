//fibonacci array my first version
function fibonacciArray (index,result=[0,1]){
     if (index<=2||result.length>index) return result;
     var next=result[result.length-2]+result[result.length-1];
     result.push(next);
     return fibonacciArray (index,result);     
}
let test=fibonacciArray(10);
let element=fibonacciArray(10)[10];
//fibonacci web dev version
//https://www.youtube.com/watch?v=WbwP4w6TpCk
function fibonacci(n,sequence=[0]){
     if (sequence[n]!=null){
          return sequence[n];
     }
     let result;
     if (n<=2){
          result=1;
     } else {
          result=fibonacci(n-1,sequence)+fibonacci(n-2,sequence);
     }
     sequence[n]=result;
     return result;
}
let test=fibonacci(800);
//fibonacci array: just store sequence out of the function
let sequence=[0];
function fibonacci(n){
     if (sequence[n]!=null){
          return sequence[n];
     }
     let result;
     if (n<=2){
          result=1;
     } else {
          result=fibonacci(n-1,sequence)+fibonacci(n-2,sequence);
     }
     sequence[n]=result;
     return result;
}
let test=fibonacci(10);


