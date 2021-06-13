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
function buildGraph (edges){
     // creates an empty object
     let graph = Object.create(null);
     function addEdge (from,to){
          //in case a place and their respective destination is yet to be included in the map object
          if (graph[from]==null){
               //includes a brandnew place
               graph[from]=[to];
          } else {
               //adds a destination to an existing place
               graph[from].push(to);
          }          
     }
     for (let [from,to] of edges.map(e=>e.split("-"))){
          //calls addEgde function from both endings
          addEdge(from,to);
          addEdge(to,from);
     }
     return graph;
}
const roadGraph = buildGraph(roads);
//
