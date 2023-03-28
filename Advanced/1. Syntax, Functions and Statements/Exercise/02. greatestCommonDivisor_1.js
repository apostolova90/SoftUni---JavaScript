function greatestCommonDivisor(a, b) {
    let firstNumber = Number(a);
    let secondNumber = Number(b);

    while(firstNumber !== secondNumber){ // въртим докато първото и второто число са различни

        if (firstNumber > secondNumber){ // в зависимост от това, кое число е по-голямо, от него вадим по-малкото
            firstNumber -= secondNumber; 
        } else {
            secondNumber -= firstNumber
        }
    }
    console.log(firstNumber)
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458)




