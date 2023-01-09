function mathOperations(numOne, numTwo, oparator){

let result;

switch(oparator){
    case "+": result = numOne + numTwo; break;
    case "-": result = numOne - numTwo; break;
    case "*": result = numOne * numTwo; break;
    case "/": result = numOne / numTwo; break;
    case "%": result = numOne % numTwo; break;
    case "**": result = numOne ** numTwo; break
}
    console.log (result);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*')