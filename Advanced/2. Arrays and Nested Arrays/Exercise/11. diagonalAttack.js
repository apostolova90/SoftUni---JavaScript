//Another

function diagonalAttack(arr) {
    let firstDiag = 0;
    let secondDiag = arr.length - 1;
    let matrix = [];
    let sumDiagOne = 0;
    let sumDiagTwo = 0;
  
    // в новия масив "matrix", наливаме всечки стрингове от главния масив, който сме направили на отделни масиви
    for (let i = 0; i < arr.length; i++) {
      let split = arr[i].split(' ');
      matrix.push(split);
    }
  
    // минаваме през новосъздадения масив и сметаме диагоналите
    for (let i = 0; i < matrix.length; i++) {
      sumDiagOne += Number(matrix[i][firstDiag]);
      sumDiagTwo += Number(matrix[secondDiag][i]);
      firstDiag++;
      secondDiag--;
    }
  
    firstDiag = 0;
    secondDiag = matrix.length - 1;
    
    if (sumDiagOne === sumDiagTwo) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (j !== firstDiag && j !== secondDiag) {
            matrix[i][j] = sumDiagOne;
          }
        }
        firstDiag++;
        secondDiag--;
      }
    }
    matrix.forEach(row => console.log(row.join(' ')));

}
diagonalAttack([
'5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);

diagonalAttack([
'1 1 1',
'1 1 1',
'1 1 0']);