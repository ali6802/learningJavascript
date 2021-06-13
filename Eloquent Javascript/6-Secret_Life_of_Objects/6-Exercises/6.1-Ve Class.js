class Vec {
     constructor(x,y){
          this.x=x;
          this.y=y;
     }
     //returns the length of the vector
     get length(){
          return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
     }
     //returns the vector minus a given one (arg)
     minus(external){
          return new Vec(this.x-external.x,this.y-external.y);
     }
     //returns the vector plus a given one
     plus(external){
          return new Vec(this.x+external.x,this.y+external.y);
     }
}
//assigning minus and length to the class prototype
class Vec {
     constructor(x,y){
          this.x=x;
          this.y=y;
     }
     //returns the length of the vector
     get length(){
          return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));
     }
}
//assigns the vector subtration function to the prototype
Vec.prototype.minus = function(external){
     return new Vec(this.x-external.x, this.y-external.y);
}
//assigns the vector addition fuction to the prototype
Vec.prototype.plus = function (external){
     return new Vec(this.x+external.x, this.x+external.x);
}
//verification
let vec1 = new Vec(2,2);
let vec2 = new Vec(1,2);
let plus = vec1.plus(vec2);
let minus = vec1.minus(vec2);
console.log(vec1.length);
console.log(vec2.length);
console.log(plus.length);
console.log(minus.length);
