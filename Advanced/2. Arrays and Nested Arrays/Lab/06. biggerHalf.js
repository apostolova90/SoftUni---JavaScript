function biggerHalf(array){

    let newArray = [];
    let length = Math.ceil(array.length / 2);
    array.sort((a,b) => a - b).reverse();

    for (let i = 0; i < length; i++){
        newArray.push(array[i]);
    }

    return newArray.reverse();
}
biggerHalf(biggerHalf([4, 7, 2, 5]));
biggerHalf([3, 19, 14, 7, 2, 19, 6])