function sameNumbers(num){

    let numToString = num.toString(); // превръщаме го в стринг, за да въртим след това през елемнтите му
    let isSame = true;
    let sumOfDigits = 0;
    let digitToCheck = Number(numToString[0]);

    for (let i = 0; i < numToString.length; i++) {
        let currentNum = Number(numToString[i]);
        sumOfDigits += currentNum

        if (digitToCheck !== currentNum) {
            isSame = false;
        } 
    }

        console.log(isSame);
        console.log(sumOfDigits)

}
sameNumbers(2222222);
sameNumbers(1234)