function roatateArray(array){

    let newArray = []
    let rotations = array.pop() //маха последния елемент от масива и го записвам под нова величина

    for (i = 0; i < array.length; i++){
        newArray.push(array[i]) //наливам останалите елемнти в нов масив
    }
    while(rotations > 0){
        let elementToMove = newArray.pop(); //взимам последния елемнт 
        newArray.unshift(elementToMove) //и го слагам най-отпред
        rotations-- 
    }
    console.log(newArray.join(' '))

}
roatateArray(['1', '2', '3', '4', '2'])
roatateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
