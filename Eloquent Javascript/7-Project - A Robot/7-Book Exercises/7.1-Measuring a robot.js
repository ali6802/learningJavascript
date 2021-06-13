function countSteps(state, robot, memory) {
  for (let steps = 0;; steps++) {
    //in case all the parcels had been delivered
    if (state.parcels.length == 0) return steps;
    //returns a direction object { direction: }
    let action = robot(state, memory);
    //updates the current location and package location
    state = state.move(action.direction);
    //updates the memory
    memory = action.memory;
  }
}
//
function compareRobots(robot1, memory1, robot2, memory2) { 
  //total number of steps for each robot
  let total1 = 0, total2 = 0;
  //100 simulations
  for (let i = 0; i < 100; i++) {
    //returns a set of parcels with their respective current location and dropoff destinations
    let state = VillageState.random();
    //returns the number of steps necessary to empty the "mail truck"
    total1 += countSteps(state, robot1, memory1);
    total2 += countSteps(state, robot2, memory2);
  }
  //prints out the average steps per track
  console.log(`Robot 1 needed ${total1 / 100} steps per task`);
  console.log(`Robot 2 needed ${total2 / 100}`);
}
compareRobots(routeRobot, [], goalOrientedRobot, []);
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
//
function routeRobot(state, memory) {
     //starts out the memory as the predefined mailRoute
     if (memory.length == 0) {
     memory = mailRoute;
     }
     //the next destination on the route is always the first array element. Then once that location is chosen, it is removed from the array
     return {direction: memory[0], memory: memory.slice(1)};
}