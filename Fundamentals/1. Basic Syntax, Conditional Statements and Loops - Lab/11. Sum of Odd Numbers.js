function sumOfOddNumbers(number){
    let numForPrint = 1
    let sum = 0;
    for (let i = 0; i < number; i++){
        console.log(numForPrint);
        sum += numForPrint;
        numForPrint += 2;
    }

    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);