"use strict";

const swapiFilms = async function(){
     let url="https://swapi.dev/api/films/",
     filmsData={},
     films=[];
     filmsData=await fetch(url).then(data=>data.json());
     films=filmsData.results.map(obj=>obj.title);
     

     //processing data
     console.log(films);
}

swapiFilms();
console.log("Asyncr");