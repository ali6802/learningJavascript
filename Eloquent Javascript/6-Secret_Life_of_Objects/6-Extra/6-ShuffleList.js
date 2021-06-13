//iterator playlist
// receives and array of objects, songs and their data, and returns the next song to play in a shuffled manner
let playlist=[
     {song: "Asa Branca", artist: "Luiz Gonzaga", gate:802185},
     {song: "Yesterday", artist: "Beatles", gate:152841},
     {song: "Arioso", artist: "JS Bach", gate:524721},
     {song: "Wonderful tonight", artist: "Eric Clapton", code:316358},
     {song: "Wind of change", artist: "scorpions", code:258012},
     {song: "everybody hurts", artist: "REM", code:368542},
     {song: "Fat bottomed girls", artist: "Queen", code:16854},
     {song: "Still", artist: "Dr. Dre", code:15251},
     {song: "Silly Love Songs", artist: "Paul McCartney", code:857215},
];
//
let shuffle={
     [Symbol.iterator]:function(playlist){
          let length=playlist.length;
          let control={length:length,chosen:[],next:0};
          let index=0;
          return{
               //the iterator is a pointer for transversing the elements of a data structure
               next:()=>{
                    function randomNumber(control){
                         //generates a random number
                         let rand=Math.floor(Math.random()*(control.length));
                         //checks wether the chosen array has been exceeded
                         if (control.length==control.chosen.length){
                              control.chosen=[];
                              control.chosen.push(rand);
                              control.next=rand;
                              return control;
                         }
                         //checks if the rand number has already been picked
                         else if (control.chosen.some((i)=>i===rand)){
                              return randomNumber(control);
                         //returns the rand number, next and computes it in the chosen array
                         } else {
                              control.chosen.push(rand);
                              control.next=rand;
                              return control;
                         }         
                    }
                    index=randomNumber(control).next;
                    return{
                         value: playlist[index],
                         done: false};
               }
          };
     }
}
let nextSong=shuffle[Symbol.iterator](playlist);
console.log(nextSong.next().value.song);
