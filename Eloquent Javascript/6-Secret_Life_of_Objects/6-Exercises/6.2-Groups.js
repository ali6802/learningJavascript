class Group {
     constructor(){
          this.content=[];
     }
     has(value){
          return this.content.includes(value);
     }
     add(value){
          if (!this.has(value)){
               this.content.push(value);
          }
     }
     delete(value){
          this.content=this.content.filter(i=>i!==value);
     }
     //smarter option i developed
     addArray(array){
          for (let value of array){
               this.add(value);
          }
     }
     //dumb funtion exercise demands you to do
     static from(array){
          let groupFrom= new Group;
          for (let value of array){
               groupFrom.add(value);
          }
          return groupFrom;
     }
}
//
let group = new Group;
group = Group.from([0,5]);
group.addArray([10,20,30,40,50]);
console.log(group.content);//
/*
static from(collection) {
          let group = new Group;
          for (let value of collection) {
            group.add(value);
          }
          return group;
     }
*/