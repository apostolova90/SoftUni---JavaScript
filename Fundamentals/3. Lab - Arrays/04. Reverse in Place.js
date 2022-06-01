function reeverseInPlace(arr){

    let k = arr.length - 1;      // задаваме последния елемент от масива  

    for (let i = 0; i < arr.length / 2; i++, k--){
    let temp = arr[i];     // задаваме първия елемнт от масива      
    arr[i] = arr[k]        // казваме, че първият елемент от масива ще стабе псоледен      
    arr[k] = temp         // и последния става първи      
}
console.log (arr.join(" "))
    
}



reeverseInPlace(['a', 'b', 'c', 'd', 'e']);
reeverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reeverseInPlace(['33', '123', '0', 'dd']); 