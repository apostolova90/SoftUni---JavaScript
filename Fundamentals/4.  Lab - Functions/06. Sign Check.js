function signCheck(num1, num2, num3) {

    let totalNegative = 0;

    if (isNegative(num1)) {
        totalNegative++
    }
    if (isNegative(num2)) {
        totalNegative++
    }
    if (isNegative(num3)) {
        totalNegative++
    }


    if (totalNegative % 2 === 0){  // ако от три числа, две са отрицателни, отговора винаги ще е Positive :)
        console.log ("Positive")
    } else {
        console.log ("Negative")
    }



    function isNegative(number) { //boolean
        return number < 0
    }

}


console.log (signCheck(5, 12, -15))
console.log (signCheck(-6, -12, 14))
console.log (signCheck(-1, -2, -3))
console.log (signCheck(-5, 1, 1))




// обикновено решение

/* function signCheck(num1, num2, num3) {

    let totalNegative = 0;
    for(let i = 0; i < 3; i++){
        if (num1 < 0) {
            totalNegative++
        }
        if (num2 < 0) {
            totalNegative++
        }
        if (num3 < 0) {
            totalNegative++
        }
    }

    if (totalNegative % 2 === 0){  // ако от три числа, две са отрицателни, отговора винаги ще е Positive :)
        console.log ("Positive")
    } else {
        console.log ("Negative")
    }
}

signCheck(5, 12, -15)
signCheck(-6, -12, 14)
signCheck(-1, -2, -3)
signCheck(-5, 1, 1) */