function uniquePINCodes(input) {
  const firstMaxNum = Number(input[0]);
  const secondMaxNum = Number(input[1]);
  const thirdMaxNum = Number(input[2]);
  let  = "";
  for (let a = 2; a <= firstMaxNum; a++) {
    for (let b = 2; b <= secondMaxNum; b++) {
      for (let c = 2; c <= thirdMaxNum; c++) {
        if (a % 2 === 0 && c % 2 === 0) {
          if (b === 2) {
            pinCode = `${a} ${b} ${c}`;
          } else if (b > 2 && b % 2 !== 0) {
            if (b > 7) {
              continue;
            } else {
            pinCode = `${a} ${b} ${c}`;
            }
          } else {
            continue;
          }
          console.log(pinCode);
        }
      }
    }
  }
}
uniquePINCodes(["3", "5", "5"]);

