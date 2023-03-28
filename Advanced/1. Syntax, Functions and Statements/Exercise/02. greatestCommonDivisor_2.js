

// Another


function greatestCommonDivisor(firstNum, secondNum) {
    const maxNum = Math.max(firstNum, secondNum); // кое е най-голямото число от дадените
        let gcd;
    for (let i = 0; i <= maxNum; i++) { // въртим до него, защото няма как делителя да е по-голям от най-голямото число
        if (firstNum % i === 0 && secondNum % i === 0) {
            gcd = i;
        }
    }
    console.log(gcd);
}
greatestCommonDivisor(15, 5);
greatestCommonDivisor(2154, 458)
