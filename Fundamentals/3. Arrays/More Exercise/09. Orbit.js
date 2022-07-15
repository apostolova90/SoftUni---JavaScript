/* 
ДРУГ */

function orbit([rows, cols, x, y]) {
    let matrix = [];
  
    for (let i = 0; i < rows; i++) {
      matrix.push([]);
    }
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
      }
    }
    
    matrix.forEach(row => console.log(row.join(' ')));
  }
  orbit([4, 4, 0, 0]);
  orbit([5, 5, 2, 2]);
  orbit([3, 3, 2, 2]);