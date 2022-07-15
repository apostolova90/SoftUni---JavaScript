
/* ДРУГ */

function jansNotation(arr) {
  let numArr = [];
  let isEnoughOperands = true;

  for (let el of arr) {
    if (el != "+" && el != "-" && el != "*" && el != "/") {
      numArr.push(el);
    }
    if (el == "+") {
      if (numArr.length > 1) {
        let newOperand = numArr[numArr.length - 2] + numArr[numArr.length - 1];
        numArr.splice(numArr.length - 2, 2, newOperand);
      } else {
        isEnoughOperands = false;
        break;
      }
    } else if (el == "-") {
      if (numArr.length > 1) {
        let newOperand = numArr[numArr.length - 2] - numArr[numArr.length - 1];
        numArr.splice(numArr.length - 2, 2, newOperand);
      } else {
        isEnoughOperands = false;
        break;
      }
    } else if (el == "*") {
      if (numArr.length > 1) {
        let newOperand = numArr[numArr.length - 2] * numArr[numArr.length - 1];
        numArr.splice(numArr.length - 2, 2, newOperand);
      } else {
        isEnoughOperands = false;
        break;
      }
    } else if (el == "/") {
      if (numArr.length > 1) {
        let newOperand = numArr[numArr.length - 2] / numArr[numArr.length - 1];
        numArr.splice(numArr.length - 2, 2, newOperand);
      } else {
        isEnoughOperands = false;
        break;
      }
    }
  }

  if (!isEnoughOperands) {
    console.log("Error: not enough operands!");
  } else {
    if (numArr.length > 1) {
      console.log("Error: too many operands!");
    } else if (numArr.length == 1) {
      console.log(numArr.join());
    }
  }
}
jansNotation([3, 4, "+"]);
jansNotation([5, 3, 4, "*", "-"]);
jansNotation([7, 33, 8, "-"]);
jansNotation([15, "/"]);
jansNotation([31, 2, "+", 11, "/"]);
jansNotation([-1, 1, "+", 101, "*", 18, "+", 3, "/"]);
