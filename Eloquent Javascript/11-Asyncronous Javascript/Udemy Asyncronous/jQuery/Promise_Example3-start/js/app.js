"use strict";
/*
const moviePlanets=function(movieNum){
     let url="https://swapi.dev/api/films/";
     $.getJSON(url+movieNum+"/")
     .then(function(response){
          console.log(response.title);
          console.log("PLANETS");
          response.planets.forEach(p=>$.getJSON(p).then(pl=>console.log(pl.name)));
     })
     .catch(reject=>console.log(`Couldnt retrieve films:${reject}`));
};
moviePlanets(1);
*/
const moviePlanets=function(movieNum){
     let url="https://swapi.dev/api/films/";
     $.getJSON(url+movieNum+"/")
     .then(function(response){
          console.log(response.title);
          console.log("PLANETS");
          return response.planets;        
     }).then(pl=>{
          pl.forEach(p=>{
               $.getJSON(p).then(p=>console.log(p.name));
          });
     })
     .catch(reject=>console.log(`Couldnt retrieve films:${reject}`));
     
};

moviePlanets(1);


