function sortingNumbers(array){

    let newArray = [];
    let arr = array.sort(function(a,b){
        return a-b;
    }) 

    let length = array.length / 2;
    for (let i = 0; i < length; i++){ 
        newArray.push(arr.shift()); // изрязваме първия елемнт от масива и го слагаме на първо място в новия
        newArray.push(arr.pop()); // изрязваме последния елемнт от масива и го слагаме на следващо място в новия
    }
    return newArray
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
