function sumOfNumbers(num1, num2){

    let sum = 0;
    let numOne = Number(num1);
    let numTwo = Number(num2);

    for (let i = numOne; i <= numTwo; i++){
        sum += i;
    }

    console.log(sum)
}
sumOfNumbers('1', '5');
sumOfNumbers('-8', '20')