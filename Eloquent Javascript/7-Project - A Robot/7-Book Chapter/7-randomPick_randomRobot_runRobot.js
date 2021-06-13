/* 
For roadGraph check the 7-roadGraph.js file
For class VillageState check the 7-VillageState.js file
*/
function runRobot(state,robot,memory) {
     //turn increments for every "PostMan" update
     for (let turn=0;; turn++){
     //in case all the parcels had been delivered
     if (state.parcels.length==0){
     console.log(`Done in ${turn} turns`);
     break;
     }
     //given a state place, returns a possible random destination
     let action = robot(state, memory);
     //calls the state move method given the direction given by the random robot. It updates the state.place and parcel.place, and removes a parcel once it is delivered
     state = state.move(action.direction);
     //memory undefined for this case
     memory = action.memory;
     //logs the next direction
     console.log(`Moved to ${action.direction}`);
     }
}
//picks a random array index and return its content
function randomPick(array) {     
     let choice = Math.floor(Math.random() * array.length);
     return array[choice];
}
//given a state place, returns a possible random destination
function randomRobot(state) {     
     return {direction: randomPick(roadGraph[state.place])};
}
//creates a random set of parcels with random start locations and random dropoff locations
VillageState.random = function(parcelCount = 5) {
     let parcels = [];
     for (let i = 0; i < parcelCount; i++) {
     //chooses a random address for the parcel based on the roadGraph keys
     let address = randomPick(Object.keys(roadGraph));
     let place;
     do {
     //chooses a random start place for the parcel based on the roadGraph keys
     place = randomPick(Object.keys(roadGraph));
     //in case place and address are same, it is executed again
     } while (place == address);
     //includes the new parcel to the "parcel Truck"
     parcels.push({place, address});
     }
     return new VillageState("Post Office", parcels);
};
//
runRobot(VillageState.random(), randomRobot);
/*
Moved to Marketplace
Moved to Shop
Moved to Marketplace
Moved to Town Hall
Moved to Shop
Moved to Grete's House
Moved to Shop
Moved to Marketplace
Moved to Town Hall
Moved to Bob's House
Moved to Alice's House
Moved to Bob's House
Moved to Town Hall
Moved to Marketplace
Moved to Post Office
Moved to Alice's House
Moved to Bob's House
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Bob's House
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Post Office
Moved to Alice's House
Moved to Bob's House
Moved to Town Hall
Moved to Bob's House
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Cabin
Moved to Alice's House
Moved to Bob's House
Moved to Alice's House
Moved to Post Office
Moved to Marketplace
Moved to Town Hall
Moved to Marketplace
Moved to Post Office
Moved to Marketplace
Moved to Post Office
Moved to Marketplace
Moved to Farm
Moved to Grete's House
Moved to Farm
Moved to Grete's House
Moved to Ernie's House
Moved to Grete's House
Moved to Shop
Moved to Marketplace
Moved to Farm
Moved to Marketplace
Moved to Farm
Moved to Grete's House
Moved to Ernie's House
Moved to Daria's House
Done in 66 turns
*/