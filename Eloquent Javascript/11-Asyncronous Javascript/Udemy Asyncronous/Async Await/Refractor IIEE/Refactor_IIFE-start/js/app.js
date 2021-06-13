"use strict";
(async function(){
     let data=await fetch('https://jsonplaceholder.typicode.com/todos')
     let obj=await data.json();
     console.log(obj);
})();


console.log('Other code');