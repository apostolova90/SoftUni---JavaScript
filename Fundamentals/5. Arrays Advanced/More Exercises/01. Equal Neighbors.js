function equalNeighbor(matrix) {
  function columnNeighbors(matrix) {
    let numberOfNeighbors = 0;
    let rowlength = matrix[0].length;
    for (let i = 0; i < matrix.length - 1; i++) {
      for (let j = 0; j < rowlength; j++) {
        let currElement = matrix[i][j];
        let nextElement = matrix[i + 1][j];

        if (currElement == nextElement) {
          numberOfNeighbors++;
        }
      }
    }
    return numberOfNeighbors;
  }

  function rowNeighbors(matrix) {
    let numberOfNeighbors = 0;
    for (let row of matrix) {
      for (let i = 0; i < row.length - 1; i++) {
        let currElement = row[i];
        let nextElement = row[i + 1];

        if (currElement == nextElement) {
          numberOfNeighbors++;
        }
      }
    }
    return numberOfNeighbors;
  }

  let numberOfPairsOfNeighbors = columnNeighbors(matrix) + rowNeighbors(matrix);

  return numberOfPairsOfNeighbors;
}
equalNeighbor([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
equalNeighbor([
  ["test", "yo", "yo", "ho"],
  ["well", "done", "no", "6"],
  ["not", "done", "yet", "5"],
]);
