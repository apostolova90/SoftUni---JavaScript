function negativePositiveNumbers(array){

    let newArray = [];

    for (let element of array){
        if (element >= 0){
            newArray.push(element);
        } else {
            newArray.unshift(element);
        }
    }

    for (let i = 0; i < newArray.length; i++){
        let currentElemnt = newArray[i];
        console.log(currentElemnt)
    }
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1])