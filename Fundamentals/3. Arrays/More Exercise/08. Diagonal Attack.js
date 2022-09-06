function diagonalAttack(arr) {
    let firstDiag = 0;
    let secondDiag = arr.length - 1;
    let result = [];
    let sumDiagOne = 0;
    let sumDiagTwo = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let split = arr[i].split(' ');
      result.push(split);
    }
  
    for (let i = 0; i < result.length; i++) {
      sumDiagOne += Number(result[i][firstDiag]);
      sumDiagTwo += Number(result[secondDiag][i]);
      firstDiag++;
      secondDiag--;
    }
  
    firstDiag = 0;
    secondDiag = result.length - 1;
    
    if (sumDiagOne === sumDiagTwo) {
      for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[i].length; j++) {
          if (j !== firstDiag && j !== secondDiag) {
            result[i][j] = sumDiagOne;
          }
        }
        firstDiag++;
        secondDiag--;
      }
    }
    result.forEach(row => console.log(row.join(' ')));
  }
  diagonalAttack(['5 3 12 3 1',
  '11 4 23 2 5',
  '101 12 3 21 10',
  '1 4 5 2 2',
  '5 22 33 11 1']  
  );
  diagonalAttack(['1 1 1',
  '1 1 1',
  '1 1 0']
  );