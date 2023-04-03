function printAndSum(startNum, endNum){

    let sum = 0;
    let printLine = ''; 

    for (let currentNumber = startNum; currentNumber <= endNum; currentNumber++){
        sum += currentNumber;

        if(currentNumber === endNum) {
            printLine += `${currentNumber}`
        } else {
            printLine += `${currentNumber} `
        }

    }

    console.log(printLine)
    console.log(`Sum: ${sum}`)
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
