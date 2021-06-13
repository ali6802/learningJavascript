//creates the constructor
let Person = function(name,yearOfBirth,job){
     this.name=name;
     this.yearOfBirth=yearOfBirth;
     this.job=job;
}
// assigns a calculate age method on the person prototype
Person.prototype.calculateAge=function(){
     console.log(2016-this.yearOfBirth);
}
//creates an intance for john
var john = new Person(`John`, 1990, `Teacher`);
//creates the jane instance
let jane= new Person(`Jane`, 1984, `designer`);
//creates the mark instance
let mark = new Person(`Mark`, 1948, `retired`);

