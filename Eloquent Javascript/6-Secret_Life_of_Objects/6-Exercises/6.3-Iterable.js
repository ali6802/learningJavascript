// Group class (super object) from previous exercise = MY TAKE
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
     addArray(array){
          for (let value of array){
               this.add(value);
          }
     }     
}
let group= new Group;
group.addArray([10,20,30,40,50]);
console.log(group.content);
//Iterable object
const Iterable = {
     [Symbol.iterator]:function(group){
          let index=-1;
          let array=group.content;
          let length=array.length;
          //
          return{
               next:()=>{
                    index++;
                    if (index>=length)
                    return {value: undefined, done: true};
                    else
                    return {value: array[index], done: false};
               }
          };
     }
}
let iterator = Iterable[Symbol.iterator](group);
//do while version
do{
     var result;
     if (result != undefined) console.log(result.vale);
     result=iterator.next();
} while (result.done==false)
//Eloquent Javascript Answer
class Group {
     constructor() {
       this.members = [];
     }
   
     add(value) {
       if (!this.has(value)) {
         this.members.push(value);
       }
     }
   
     delete(value) {
       this.members = this.members.filter(v => v !== value);
     }
   
     has(value) {
       return this.members.includes(value);
     }
   
     static from(collection) {
       let group = new Group;
       for (let value of collection) {
         group.add(value);
       }
       return group;
     }
   
     [Symbol.iterator]() {
       return new GroupIterator(this);
     }
   }
   
   class GroupIterator {
     constructor(group) {
       this.group = group;
       this.position = 0;
     }
   
     next(){
       if (this.position >= this.group.members.length) {
         return {done: true};
       } else {
         let result = {value: this.group.members[this.position],
                       done: false};
         this.position++;
         return result;
       }
     }
   }
   
   for (let value of Group.from(["a", "b", "c"])) {
     console.log(value);
   }
   
  