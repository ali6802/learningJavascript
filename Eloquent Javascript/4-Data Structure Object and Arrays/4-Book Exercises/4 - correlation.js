
function phi(table) {
     return 
     let top= table[3]*table[0]-table[2]*table[1]; 
     let down=
     (table[2] + table[3])*
     (table[0] + table[1])*
     (table[1] + table[3])*
     (table[0] + table[2]);

     return top/Math.sqrt(down);
     
     
     }
     console.log(phi([76, 9, 4, 1]));

let journal = [];

function addEntry(events, squirrel) {
journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
"television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
"touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
"beer"], true);