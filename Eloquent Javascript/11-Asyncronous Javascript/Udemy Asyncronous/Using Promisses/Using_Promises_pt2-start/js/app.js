"use strict";

let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord =  "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=rn9jkaqqwulfolcyyfwwnzmyblyvgb3cndu6izv5l8flzvjpm",
    wordObj;

/*asyncFunction()
.then(function(val) {
    console.log("Yeah!! " + val);
    return asyncFunction2();
})
.then(function(val) {
    console.log("Second promise: " + val);
});*/


//returns a randon word as well as a its definitiond
fetch(wordnikWords+"randomWord"+apiKey)
.then(response=>response.json())
.then(data=>{
    console.log(data.word);
    return fetch(wordnikWord+data.word+"/hyphenation"+apiKey);})
.then(def=>def.json())
.then(def=>console.log(def));
console.log("Asyncr");
//returns a randon word as well as a its definitiond
fetch(wordnikWords+"wordOfTheDay"+apiKey)
.then(response=>response.json())
.then(data=>{
    console.log(data.word);
    return fetch(wordnikWord+data.word+"/hyphenation"+apiKey);})
.then(def=>def.json())
.then(def=>console.log(def));
console.log("Asyncr");

