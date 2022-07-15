function sumFirstAndLastArray (numbers){

    let firstNumber = numbers[0];
    let lastNumber = numbers[numbers.length - 1];
    let sum = firstNumber + lastNumber;

    console.log(sum);

} 
sumFirstAndLastArray([20, 30, 40]);
sumFirstAndLastArray([10, 17, 22, 33]);
sumFirstAndLastArray([11, 58, 69])