function sumFirstLast(array){

    let lastElement = Number(array.pop());
    let firstElemnt = Number(array[0]); // или     = Number(array.shift())

    let sum = lastElement + firstElemnt;
    console.log(sum);

}
sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10'])
