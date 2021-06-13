/*
let logCall=function(){
     console.log("logCall was called back after 3 seconds");
};

setTimeout(logCall,3000);
*/
//Annonymous function
let btn=document.querySelector("#item1");
btn.addEventListener("click",(e)=>console.log("The button was clicked."));
