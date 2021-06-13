//returns even or odd
function evenness(N)
{
     // checks if it is a whole number
     if (N-Math.floor(N)!=0||isNaN(N)){
          return "Not a whole number";
     }
     else{
          // checks if the number is odd or even
          function evenOdd(N)
          {
               if (N==0){
                    return "Even";
               }
               else if (N==1){
                    return "Odd";
               }
               else{
                    return evenOdd(N-2);
               }    
          }
          // returns the absolute value of the number
          N=Math.abs(N);          
          return evenOdd(N);
     }
}
N=20;
console.log(evenness(N));




