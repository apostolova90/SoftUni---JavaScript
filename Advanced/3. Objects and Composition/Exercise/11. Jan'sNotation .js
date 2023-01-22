// Another


function janNotation(array) {
    let numArr = [];
    for (let line of array) {
        if (typeof line === 'number') {
            numArr.push(line)
        } else {
            if (numArr.length < 2) {
                console.log(`Error: not enough operands!`);
                return;
            }
            let secondNum = numArr.pop();
            let firstNum = numArr.pop();
            if (line === '+') {
                let result = firstNum + secondNum;
                numArr.push(result);
            } else if (line === '-') {
                let result = firstNum - secondNum;
                numArr.push(result);
            } else if (line === '*') {
                let result = firstNum * secondNum;
                numArr.push(result);
            } else if (line === '/') {
                let result = firstNum / secondNum;
                numArr.push(result);
            }
        }
    }
    if (numArr.length > 1) {
        console.log(`Error: too many operands!`)
    } else if (numArr.length === 1) {
        console.log(numArr[0])
    }
}
janNotation([3,
    4,
    '+']
   )
janNotation([5,
    3,
    4,
    '*',
    '-']
   )