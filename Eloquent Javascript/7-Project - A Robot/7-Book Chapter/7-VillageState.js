class villageState{
     constructor(place,parcels){
          this.place=place;
          this.parcels=parcels;
     }
     move(destination){
          // checks weather there is a road connecting the current place and the descination
          if(!roadGraph[this.place].includes(destination)){
               return this;
          } else {
               let parcels=this.parcels.map(
                    p=>{ //in case the package origin is not the current place, it is left intact, otherwise updates the current package location with the destination                         
                         if (p.place!=this.place)
                         return p;
                         else
                         return {place: destination, address: p.address};
                    }
                 //when the parcel hits the destination it is removed from the package array
               ).filter(p=>p.place!=p.address);
          }
          return new villageState(destination,parcels);
     } 
}
//
let truck=[{place: "Post Office", address: "Alice's House"},{place: "Post Office", address: "Daria's House"},{place: "Bob's House", address: "Farm"}];
let first = new VillageState("Post Office",truck);
let next = first.move("Alice's House");
//
console.log(next.place);
// → Alice's House
console.log(next.parcels);
// → []
console.log(first.place);
// → Post Office