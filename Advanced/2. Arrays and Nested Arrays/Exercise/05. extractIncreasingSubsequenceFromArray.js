function extractIncreasing(array){

    let newArray = [];
    let num = Math.max();

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        if (currentNum >= num) {
            newArray.push(currentNum);
            num = currentNum;
        }
    }
    return newArray
}
extractIncreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasing([1, 2, 3, 4]);
extractIncreasing([20, 3, 2, 15, 6, 1])