function amazingNumber(num){

let numToString = String(num); // обръщаме в стринг, за да минем през всеки символ
let result = 0;

    for (let i = 0; i < numToString.length; i++){
    let num = Number(numToString[i]); // обръщаме всеки синвол в число, за да сметнем сбора
    result += num
    } 
    
    
    let resultToString = String(result); // обръщам и това в сринг, за да видя дали съдържа 9 в себе си
    let isAmazing = false;
    for (let i = 0; i < resultToString.length; i++){
        if (Number(resultToString[i]) === 9){
            isAmazing = true;
            break; // прекъсвам ако има поне една 9ка
        }
        } 
        let amazing = isAmazing ? "True" : "False";
    console.log(`${num} Amazing? ${amazing}`);    

}
amazingNumber(1233) 
amazingNumber(999)