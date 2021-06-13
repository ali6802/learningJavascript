//CREATES A GRAPH ELEMENT WITH 
const roads = [
     "Alice's House-Bob's House", "Alice's House-Cabin",
     "Alice's House-Post Office", "Bob's House-Town Hall",
     "Daria's House-Ernie's House", "Daria's House-Town Hall",
     "Ernie's House-Grete's House", "Grete's House-Farm",
     "Grete's House-Shop", "Marketplace-Farm",
     "Marketplace-Post Office", "Marketplace-Shop",
     "Marketplace-Town Hall", "Shop-Town Hall"
];
/*
edges.map(r=>r.split("-")) splits the roads array elements into two at the "-" character
#1: element to the graph object in which the key is the house followed by an array with the roads destinations connecting the properties
#2: In case a property has not been introduced to the graph object, a new one is create. or the road destination is pushed into the array's destination element.
#3: which end of an edge is a destination
*/
function buildGraph(edges){
     //creates an empty object
     let graph=Object.create(null);
     //#1
     function addEdge(from,to){
          //#2
          if (graph[from]==null)
          graph[from]=[to];
          else
          graph[from].push(to);
     }
     
     for (let[from,to] of edges.map(r=>r.split("-"))){
          //#3'
          addEdge(from,to);
          addEdge(to,from);
     }
     return graph;
}
//
const roadGraph=buildGraph(roads);
console.log(roadGraph);
//roadGraph
/*
{Alice's House: Array(3), Bob's House: Array(2), Cabin: Array(1), Post Office: Array(2), Town Hall: Array(4), …}

0 Alice's House: (3) ["Bob's House", "Cabin", "Post Office"]
1 Bob's House: (2) ["Alice's House", "Town Hall"]
2 Cabin: ["Alice's House"]
3 Daria's House: (2) ["Ernie's House", "Town Hall"]
4 Ernie's House: (2) ["Daria's House", "Grete's House"]
5 Farm: (2) ["Grete's House", "Marketplace"]
6 Grete's House: (3) ["Ernie's House", "Farm", "Shop"]
7 Marketplace: (4) ["Farm", "Post Office", "Shop", "Town Hall"]
8 Post Office: (2) ["Alice's House", "Marketplace"]
9 Shop: (3) ["Grete's House", "Marketplace", "Town Hall"]
10 Town Hall: (4) ["Bob's House", "Daria's House", "Marketplace", "Shop"]

*/


/*
Given an array of edges, buildGraph creates a map object that, for each node, stores an array of connected nodes.
It uses the split method to go from the road strings, which have the form "Start-End", to two-element arrays containing the start and end as separate
strings.
*/
//
/*
Let's condense the let's condense the village state down to the minimal parameters: Current location and undelivered parcels `
{current location, destination}
*/
//village state class
class VillageState {
     constructor(place, parcels) {
     this.place = place;
     this.parcels = parcels;
     }
     move(destination) {
     if (!roadGraph[this.place].includes(destination)) {
     return this;
     } else {
     let parcels = this.parcels.map(p => {
     if (p.place != this.place) return p;
     return {place: destination, address: p.address};
     }).filter(p => p.place != p.address);
     return new VillageState(destination, parcels);
     }
     }
}
//
let first = new VillageState("Post Office",[{place: "Post Office", address: "Alice's House"},{place:"Bob's House", address:"Grete's House"},{place:"Post Office", address:"Town Hall"}, {place:"Post Office", address:"Daria's House"}]);
//
let next = first.move("Alice's House");
console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office
//
//Deconstructing the map function
function(p) {
     if (p.place != this.place) return p;
     return {place: destination, address: p.address};
}
//The move method is where the action happens
//#First checks WHETHER THERE IS A ROAD GOING FROM THE CURRENT PLACE TO THE DESTINATION
/*
let first = new VillageState("Post Office",[{place: "Post Office", address: "Alice's House"}]);
let next = first.move("Alice's House");
this.place="Post Office";
this.parcels=[{place: "Post Office", address: "Alice's House"}];
destination="Alice'House"
*/
//
function runRobot(state, robot, memory) {
     for (let turn = 0;; turn++) {
     if (state.parcels.length == 0) {
     console.log(`Done in ${turn} turns`);
     break;
     }
     let action = robot(state, memory);
     state = state.move(action.direction);
     memory = action.memory;
     console.log(`Moved to ${action.direction}`);
     }
}
//
function randomPick(array) {
     let choice = Math.floor(Math.random() * array.length);
     return array[choice];
     }
function randomRobot(state) {
     return {direction: randomPick(roadGraph[state.place])};
}
//
VillageState.random = function(parcelCount = 5) {
     let parcels = [];
     for (let i = 0; i < parcelCount; i++) {
     let address = randomPick(Object.keys(roadGraph));
     let place;
     do {
     place = randomPick(Object.keys(roadGraph));
     } while (place == address);
     parcels.push({place, address});
     }
     return new VillageState("Post Office", parcels);
};
//
runRobot(VillageState.random(), randomRobot);
/*
Find Route discover:

const roads = [
     "Alice's House-Bob's House", "Alice's House-Cabin",
     "Alice's House-Post Office", "Bob's House-Town Hall",
     "Daria's House-Ernie's House", "Daria's House-Town Hall",
     "Ernie's House-Grete's House", "Grete's House-Farm",
     "Grete's House-Shop", "Marketplace-Farm",
     "Marketplace-Post Office", "Marketplace-Shop",
     "Marketplace-Town Hall", "Shop-Town Hall"
];
//
function buildGraph(edges){
     //creates an empty object
     let graph=Object.create(null);
     //#1
     function addEdge(from,to){
          //#2
          if (graph[from]==null)
          graph[from]=[to];
          else
          graph[from].push(to);
     }
     
     for (let[from,to] of edges.map(r=>r.split("-"))){
          //#3'
          addEdge(from,to);
          addEdge(to,from);
     }
     return graph;
}
//
const roadGraph=buildGraph(roads);
console.log(roadGraph);
//
function findRoute(graph, from, to) {
let work = [{at: from, route: []}];
console.log(" ");
console.log("at before: ", work[0].at);
console.log("route before : ",work[0].route);
console.log("work bebore :",work);
console.log("to :",to);
console.log(" ");
for (let i = 0; i < work.length; i++) {
let {at, route} = work[i];
for (let place of graph[at]) {
if (place == to) return route.concat(place);
if (!work.some(w => w.at == place)) {
work.push({at: place, route: route.concat(place)});
}
console.log(" ");
console.log("at: ", at);
console.log("place: ",place);
console.log("to: ",to);
console.log("route: ",route);
console.log("work: ",work);
console.log(" ");
}
}
}
//
let origin="Town Hall";
let visited=[];
let accum=[];
let lowerLevel=[origin];
let upperLevel=[];
let step=0;
let memory={};
let memIndex=0;
function route(roadGraph, lowerLevel,memory){
     for (let lower of lowerLevel){
          accum=accum.concat(roadGraph[lower]);
          for (let upper of roadGraph[lower]){
               if (visited.length==keys.length) return "end of loop";
               if (!visited.includes(upper)){
                    visited.push(upper);                    
               }
               console.log("step: ",step);
               console.log("upper: ",upper);
               console.log("visited: ",visited);
               console.log("accum: ",accum);               
          }
     }
     lowerLevel=accum;
     step+=1;
     if (step==2) return "end of loop";
     return route(roadGraph, lowerLevel);
}
let test=route(roadGraph,lowerLevel,memory);
//
let test=findRoute(roadGraph,"Town Hall", "Cabin");
console.log(test);
*/
const roadGraph=buildGraph(roads);
const keys=Object.create(roadGraph);
//

//findRoute from textBook
function findRoute(graph, from, to) {
     let work = [{at: from, route: []}];
     for (let i = 0; i < work.length; i++) {
          let {at, route} = work[i];
          for (let place of graph[at]) {
               if (place == to) return route.concat(place);
               if (!work.some(w => w.at == place)) {
               work.push({at: place, route: route.concat(place)});
               }
          }
     }
}
//
function findRoute(graph, from, to){
     //Keeps track of to pathfinding process
     let work=[{at: from, route:[]}];
     //length increases after each iteration
     for (let i=0; i<Work.length; i++){
          let {at, route}=work[i];
          //iteration over all possibles routes starting from a given point
          for (let place of graph[at]){
               //in case the destination is found
               if (place==to) return route.concat(place);
               //only if the next destination was not visited before
               if (!work.some(work=>work.at==place)){
                    work.push({at: place, route: route.concat(place)});
               }
          }
     }
}


