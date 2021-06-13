class Matrix {
     //#1
     constructor(width, height, element=(x,y)=>undefined){
          this.width = width;
          this.height = height;
          this.content = [];
          //#2
          for (let y=0; y<height; y++) {
               for (let x=0; x<width; x++) {
               this.content[y*width+x] = element(x, y);
                    }
               }
     }
     //#3
     get(x, y){
     return this.content[y*this.width+x];
     }
     //#4
     set(x, y, value){
     this.content[y*this.width+x] = value;
     }
}
//SubClass (child) gets its extension from the supperClass (parent)
class SymmetricMatrix extends Matrix {
     constructor(size, element=(x, y)=>undefined) {
     //mirrors its element from its correspondant element above the diagonal line
     function flip(x,y){
          if (x<y)  return element(y,x);
          else      return element(x,y);
     }
     //calls the parent constructor
     super(size, size, flip);
     }
     set(x, y, value) {
     //calls the set function from the parent
     super.set(x, y, value);
     if (x != y) {
     //flips the input coordinates in case the element is below the diagonal line to ensure its Symmetrical property
     super.set(y, x, value);
     }
     }     
}
//renerates a Symmetric matrix
let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
