function sumPrimeNonPrime(input) {

    let index = 0;
    let primeSUm = 0;
    let nonPrime = 0;

    while (input[index] !== `stop`) {
        let curNum = Number(input[index]);
        if (curNum < 0) {
            console.log(`Number is negative.`)
        } else {
        let isPrime = true;
        
        for(let i = 2; i < curNum; i++) {
            if (curNum % i === 0){
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeSUm += curNum;
        } else {
            nonPrime += curNum;
        }
    } 
    index++
    }

    console.log(`Sum of all prime numbers is: ${primeSUm}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}
sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
