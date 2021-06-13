"use strict";

/*let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=rn9jkaqqwulfolcyyfwwnzmyblyvgb3cndu6izv5l8flzvjpm",
    wordObj;*/
let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=rn9jkaqqwulfolcyyfwwnzmyblyvgb3cndu6izv5l8flzvjpm",wordObj;
//
    fetch(wordnikWords+"randomWord"+apiKey)
    .then(function(response){
       // wordObj=response;
        //console.log(wordObj);
        return response.json();
    })
    .then(function(data){
        console.log(data.word);
        return fetch(wordnikWord+data.word+"/definitions"+apiKey);
    })
    .then(function(def){
        return def.json();
    })
    .then(function(def){
        console.log(def);
    })
    .catch(function(err){
        console.log(err);
    });
    console.log("Async!!");

    
    