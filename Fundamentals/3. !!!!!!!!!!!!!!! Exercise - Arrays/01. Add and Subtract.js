// задача решена с промяна на съществувашия масив, а не със създаване на нов

function addAndSubtract(input){

    let originalArraySum = 0;
    let newSumArraySum = 0;
    let arrLength = input.length

    for (let n = 0; n < arrLength; n++){

        originalArraySum += input[n]

        if (input[n] % 2 === 0){
            input[n] += n;
        } else {
            input[n] -= n;
        }


        newSumArraySum += input[n];
    }

console.log(input);
console.log(originalArraySum);
console.log(newSumArraySum);

}
addAndSubtract([5, 15, 23, 56, 35])
addAndSubtract([-5, 11, 3, 0, 2])