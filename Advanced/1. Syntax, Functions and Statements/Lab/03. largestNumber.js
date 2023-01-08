function largerNumber (num1, num2, num3){

    let maxNumber = Math.min;

    if (num1 > num2 && num1 > num3){
        maxNumber = num1;
    } else if (num2 > num1 && num2 > num3){
        maxNumber = num2;
    } else {
        maxNumber = num3
    }

    console.log(`The largest number is ${maxNumber}.`);
    
}
largerNumber(5, -3, 16);
largerNumber(-3, -5, -22.5)