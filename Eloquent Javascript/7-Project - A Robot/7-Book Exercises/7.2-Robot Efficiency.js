function lazyRobot({place, parcels}, route) {
     if (route.length == 0) {
       // Describe a route for every parcel
       let routes = parcels.map(parcel => {
         if (parcel.place != place) {
           return {route: findRoute(roadGraph, place, parcel.place),
                   pickUp: true};
         } else {
           return {route: findRoute(roadGraph, place, parcel.address),
                   pickUp: false};
         }
       });
   
       // This determines the precedence a route gets when choosing.
       //the smaller the route, the greater is the priority
       // Route length counts negatively, routes that pick up a package
       // get a small bonus.
       
       function score({route, pickUp}) {
         return (pickUp ? 0.5 : 0) - route.length;
       }
       route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
     }   
     return {direction: route[0], memory: route.slice(1)};
}
runRobotAnimation(VillageState.random(), lazyRobot, []);
//
let test=[{route:["Bob's House","Alice's House","Cabin"], pickUp: false},{route:["Bob's House","Alice's House"], pickUp:true},{route:["Bob's House","Daria's House","Ernie's House"], pickUp:false}];
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

