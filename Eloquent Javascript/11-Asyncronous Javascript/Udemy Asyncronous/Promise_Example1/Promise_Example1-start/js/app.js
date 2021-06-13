"use strict";
/*
const swapi = function (num){
     let url="https://swapi.dev/api/people/";
     fetch(url+num+"/")
     .then(data=>data.json())
     .then(obj=>{
          console.log(obj);
          return fetch(obj.homeworld);
     })
     .then(hwdata=>hwdata.json())
     .then(hwobj=>console.log(hwobj));
}
//
*/
/*
const swapi=function(num){
     let url="https://swapi.dev/api/planets/";
     fetch(url+num+"/")
     .then(data=>data.json())
     .then(obj=>{
          console.log(obj.name);
          console.log(obj.terrain);
          console.log(obj.population);
          return fetch(obj.residents[0]);     
     })
     .then(data=>data.json())
     .then(obj=>console.log(obj));
}
swapi (1);
*/
/*
Tatooine
app.js:24 desert
app.js:25 200000
DevTools failed to load SourceMap: Could not load content for chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/sourceMap/chrome/content.map: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME
app.js:29 {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
*/
//
const swapi=function(num){
     let url="https://swapi.dev/api/planets/";
     fetch(url+num+"/")
     .then(data=>data.json())
     .then(obj=>{
          console.log("Planet "+num);
          console.log(obj.name.toUpperCase());
          console.log("RESIDENTS");
          return obj.residents;             
     })
     .then(res=>res.forEach(r=>{
          fetch(r)
          .then(data=>data.json())
          .then(p=>console.log(p.name));
          }));
}
swapi(10);
