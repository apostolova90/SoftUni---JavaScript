function roatateArray(array){

    let newArray = []
    let rotations = Number(array[array.length - 1]);

    for (i = 0; i < array.length - 1; i++){
        newArray.push(array[i])
    }
    while(rotations > 0){
        let elementToMove = newArray.shift(); //задаваме първия елемeнт за местене
        newArray.push(elementToMove) //преместваме елемнета на последна
        rotations-- 
    }
    console.log(newArray.join(' '))

}
roatateArray(['1', '2', '3', '4', '2'])
roatateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])


...............................