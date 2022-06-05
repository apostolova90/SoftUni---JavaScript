function roatateArray(array){

    let newArray = []
    let rotations = Number(array[array.length - 1]);

    while(rotations > 0){
        let elementToMove = array.shift(); //задаваме първия елемнт за местене
        array.push(elementToMove) //преместваме елемнета където искаме
        rotations-- 
    }
    console.log(array.join(' '))

}
roatateArray(['1', '2', '3', '4', '2'])
roatateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])





/* function reeverseInPlace(arr){

    let k = arr.length - 1;      // задаваме последния елемент от масива  

    for (let i = 0; i < arr.length / 2; i++, k--){
    let temp = arr[i];     // задаваме първия елемнт от масива и започваме да въртим    
    arr[i] = arr[k]        // казваме, че първият елемент от масива ще стане псоледен      
    arr[k] = temp         // и последния става първи      
}
console.log (arr.join(" "))
    
}
reeverseInPlace(['a', 'b', 'c', 'd', 'e']);
reeverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reeverseInPlace(['33', '123', '0', 'dd']);  */