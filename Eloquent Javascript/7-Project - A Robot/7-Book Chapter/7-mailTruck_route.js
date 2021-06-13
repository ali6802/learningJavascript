const mailRoute = ["Alice's House", "Cabin", "Alice's House", "Bob's House","Town Hall", "Daria's House", "Ernie's House","Grete's House", "Shop", "Grete's House", "Farm","Marketplace", "Post Office"];
//
function routeRobot(state, memory) {
     //starts out the memory as the predefined mailRoute
     if (memory.length == 0) {
     memory = mailRoute;
     }
     //the next destination on the route is always the first array element. Then once that location is chosen, it is removed from the array
     return {direction: memory[0], memory: memory.slice(1)};
}
//
runRobot(VillageState.random(),routeRobot,[]);
/*
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Bob's House
Moved to Town Hall
Moved to Daria's House
Moved to Ernie's House
Moved to Grete's House
Moved to Shop
Moved to Grete's House
Moved to Farm
Moved to Marketplace
Moved to Post Office
Moved to Alice's House
Done in 14 turns
*/