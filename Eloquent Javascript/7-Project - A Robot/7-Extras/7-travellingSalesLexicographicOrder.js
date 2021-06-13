
const nCities=4;
const width=400;
const height=600;
//Which element of the array is also an array with x and y coordinates [x,y]
const cityGraph=citiesCoordinates(nCities,width,height).coordinates;
//initialization of the orderGraph array of n elementes: [0,1,2,...,n-1]
const orderGraph=citiesCoordinates(nCities,width,height).order;
//Initializing the variables that track the best route
var minDist=undefined;
var minDistOrder;
//Iterator that yields all possible permutation for the orderGraph array
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
//returns an object in which the value is the next permuation of the orderGraph array and a done value {value:[0,4,2,1,3], done: false}
let permutation=Permutation[Symbol.iterator](orderGraph);
//calculates the distance for a given orderGraph permutation until done=true. Also stores the minimum distance found
do{
     var current=permutation.next();
     var d=calcDistance(cityGraph,current.value);
     if (minDist==undefined||d<minDist){
          minDist=d;
          minDistOrder=current.value.slice();
     }
     
} while (current.done==false);
//generates an array such that each element contains a given city coordinate that will yield the shortest route
let bestPath=[];
minDistOrder.forEach(e=>bestPath.push(cityGraph[e]));
console.log("Minimum distance: ",minDist);
console.log("Best Path: ",bestPath);
//functions
//generates random coordinates for a given n number of cities
function citiesCoordinates(n,width,height){
     let coordinates=[];
     let order=[];
     for (let i=0;i<n;i++){
          var x=Math.floor(Math.random()*width);
          var y=Math.floor(Math.random()*height);
          coordinates.push([x,y]);
          order.push(i);
     }
     return {order: order, coordinates: coordinates};
}
//returns the sum of the distance in between cities for a given order
function calcDistance(cities,order){
     var sum=0;
     for (let i=0; i<order.length-1;i++){
          //[0]=x,[1]=y
          var dx=cities[order[i+1]][0]-cities[order[i]][0];
          var dy=cities[order[i+1]][1]-cities[order[i]][1];
          sum+=Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));;
     }          
     return sum;     
}


