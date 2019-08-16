const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor(matrix) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate(direction) {
    // do work here
    let mat = this.matrix;
    let emptyMat = [];

    if (direction === "ClockWise") {
      for (let i = 0; i < mat.length; i++) {
        let arr = [];
        for (let j = 0; j < mat.length; j++) {
          arr.push(mat[j][i]);
        }
        emptyMat.push(arr.reverse());
      }
      this.matrix = emptyMat;
    }

    if (direction === "CounterClockWise") {
      for (let i = 0; i < mat.length; i++) {
        let arr = [];
        for (let j = 0; j < mat.length; j++) {
          arr.push(mat[j][i]);
        }
        emptyMat.push(arr);
      }
      this.matrix = emptyMat.reverse();
    }
    // must be a valid Direction, see Direction.js
  }
};
