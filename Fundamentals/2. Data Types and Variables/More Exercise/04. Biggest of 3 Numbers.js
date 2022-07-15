

/* ДРУГ */

function biggestOf3Numbers(num1, num2, num3) {
    let myArr = [num1, num2, num3];
    let biggestNum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] > biggestNum) {
        biggestNum = myArr[i];
      }
    }
    console.log(biggestNum);
  }
  biggestOf3Numbers(-2, 7, 3);
  biggestOf3Numbers(130,5,99);
  biggestOf3Numbers(43,43.2,43.1);
  biggestOf3Numbers(2,2,2);