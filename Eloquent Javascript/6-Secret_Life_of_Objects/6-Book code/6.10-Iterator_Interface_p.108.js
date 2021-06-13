/*
Iterator Interface, Matrix Example
#1 element function receives undefined values just to initialize the function
#2 Will store the 2D Matrix horizontally in a single array, like a chessboard sliced horizontally and glued together [y*width+x]
#3 Gets the element in a given position[y*this.width+x] of the array given (x,y) coordinates
#4 sets a value in a given position[y*this.width+x] of the array given (x,y) coordinate
*/
// writes down the matrix in a single array form
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
//loops over a matrix returning the object {value, done: false}
class MatrixIterator {
     constructor(matrix) {
     this.x = 0;
     this.y = 0;
     this.matrix = matrix;
     }
     next() {
          //in case the loop has exceeded the matrix returns {done: true}
          if (this.y==this.matrix.height) return {done: true};
          // value object includes the element value and its x and y coordinates
          let value = {x: this.x, y: this.y, value: this.matrix.get(this.x, this.y)};     
          this.x++;
          //in case the loop has exceeded the matrix width
          if (this.x == this.matrix.width) {
          this.x = 0;
          this.y++;
          }
          return {value, done: false};
     }
}
// assigns the MatrixIterator function to another function in the prototype
Matrix.prototype[Symbol.iterator] = function() {
return new MatrixIterator(this);
};
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
//loops over the matrix stored in a single array
for (let {x, y, value} of matrix) {
console.log(x, y, value);
}


