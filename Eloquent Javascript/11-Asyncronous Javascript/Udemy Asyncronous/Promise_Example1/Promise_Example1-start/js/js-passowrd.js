var password="";
//
do{
var next=randomNumber(20);
switch(true){
     case next<=7://UpperCase
          password+=String.fromCharCode(65+randomNumber(25));
          break;
     case next>7&&next<=12://LowerCase
          password+=String.fromCharCode(97+randomNumber(25));
          break;
     case next>12&&next<=15://Number
          password+=String(randomNumber(10));
          break;
     case next>15&&next<18://SpecialChar
          password+=String.fromCharCode(123+randomNumber(4));
          break;
     case next>=18&&next<20://TwoNumbers
          password+=password+=String(randomNumber(100));
          break;
     default:
          break;
}
//
function randomNumber(n){
     return rand=Math.floor(Math.random()*n);
}
} while(password.length<21)
console.log(password);
