//Returns the shortest path in a graph given to points
function findRoute(graph, from, to){
     //work array adds an object for every update in which at is the location at that specific moment and route is the path followed to get to that place
     let work = [{at: from, route: []}];
     //the inner for is run for every destination of the "at location", then the outer array starts again on its next iteration having those locations returns by the graph[at] object key as the "at" destination
     for (let i = 0; i < work.length; i++){
          let {at, route} = work[i];
          //graph[at] is the array containing all the destinations possible from the "at" location
          for (let place of graph[at]){
               //in case the final destination has been reached, the final destination is added on the route array, which is returns afterwards
               if (place == to) return route.concat(place);
               //in case the current location has been visited before the work array is not updated
               if (!work.some(w => w.at == place)){
               //the work array is updated with an object containing the current location, being the current location added to the route array
               work.push({at: place, route: route.concat(place)});
               }
          }
     }
}
//runRobot function
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
function goalOrientedRobot({place, parcels}, route){
     if (route.length == 0) {
     let parcel = parcels[0];
     if (parcel.place != place) {
     route = findRoute(roadGraph, place, parcel.place);
     } else {
     route = findRoute(roadGraph, place, parcel.address);
     }
     }
     return {direction: route[0], memory: route.slice(1)};
}
/*
se a origem do pacote e diferente do lugar atual
findRoute(roadGraph, place, parcel.place);
passar para pegar a correspondencia
se a origem do pacote e igual ao lugar atual
findRoute(roadGraph, place, parcel.address);
correspondencia ja foi pega e seguira para entrega

return
a proximo destino e sempre o primeiro elemento do array. Depois o mesmo e removido da memoria
*/
//
runRobot(VillageState.random(), goalOrientedRobot,[]);