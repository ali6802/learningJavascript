let size=8;
let board="";
count=0;

for (let m=0; m<size; m++)
{
     for (let n=0; n<size; n++)
     {
          if ((m+n)%2==0)
          {
               board+=" ";
          }
          else {
               board+="#";
          }
     }
     board +="\n";
     count+=1;
}
console.log(board);
console.log(count);

// daqui nao passa

let descubra=0;

function findSolution(target) {
     function find(current, history) {
     if (current == target) {
     return history;
     } else if (current > target) {
     return null;
     } else {
     return find(current + 5, `(${history} + 5)`) ||
     find(current * 3, `(${history} * 3)`);
     }
     }
     descubra+=1;
     return find(1, "1");
     }
     console.log(findSolution(24));
     console.log(descubra);

     let ladoA=[];
     let ladoB=[];
     function findSolution(target) {
          function find(current) {
          if (current == target) {
          return current;
          } else if (current > target) {
          return null;
          } else {
               ladoA.push(find(current + 5));
          return find(current + 5) ||
          find(current * 3);
          }
          }
          return find(1, "1");
          }
          console.log(findSolution(13));
          console.log(ladoA);
     
    


