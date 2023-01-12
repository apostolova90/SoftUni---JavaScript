function processOddPositions(array){

    let newArray = [];

    for (let i = 0; i < array.length; i++){
        if (i % 2 !== 0){
            newArray.push(array[i])
        }
    }

    let doubledNumbers = newArray.map(num => num * 2).reverse(); // взимаме всеки елемнт от масива и го умножаваме по 2
    console.log(doubledNumbers.join(' '))
}
processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3])