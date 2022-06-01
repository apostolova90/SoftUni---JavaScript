function reeverseInPlace(arr){

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
reeverseInPlace(['33', '123', '0', 'dd']); 




// друго решение

/* function reeverseInPlace(arr){

    for (let i = 0; i < arr.length / 2; i++){    // "/2" разхождаме се до средата на масива
    let buffer = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length -1 - i] = buffer
}
    console.log(arr.join(" "))
}
reeverseInPlace(['a', 'b', 'c', 'd', 'e']);
reeverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reeverseInPlace(['33', '123', '0', 'dd']);
    
     */