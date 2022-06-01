function evenAndOdd(arr){

    let sumEven = 0;
    let sumOdd = 0;
    for (let number of arr) {               // вземаме всяко число от масива
    

        if (number % 2 === 0) {
            sumEven += number
        } else {
            sumOdd += number
        }
    }
    let result = sumEven - sumOdd

console.log(result);
    
}
evenAndOdd([1,2,3,4,5,6]);
evenAndOdd([3,5,7,9]);
evenAndOdd([2,4,6,8,10]);