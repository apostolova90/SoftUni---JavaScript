function rotateArray(array, num){

    let newElemnt = "";
    for(let i = 0; i < num; i++){
        newElemnt = array.pop()
        array.unshift(newElemnt)
    }
    console.log(array.join(' '))
}
rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);