function simpleCalculator(number1, number2, operand) {

    let result = 0; 
    switch(operand) {
        case "multiply":
            result = multiply(number1, number2) //отдолу създаваме function-а за да го ползваме тук
        break;
        case "divide":
            result = divide(number1, number2)  //отдолу създаваме function-а за да го ползваме тук
        break;
        case "add":
            result = add(number1, number2) //отдолу създаваме function-а за да го ползваме тук
        break;
        case "subtract":
            result = subtract(number1, number2) //отдолу създаваме function-а за да го ползваме тук
        break;
    }

console.log(result)

    // от тук нататък създаваме funtions, които да ползваме по-нататък
        function multiply(number1, number2){
            return number1 * number2
        }
        function divide(number1, number2){
            return number1 / number2
        }
        function add(number1, number2){
            return number1 + number2
        }
        function subtract(number1, number2){
            return number1 - number2
        }

}
simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");




/* 
// задача решена с arrow function 

function simpleCalculator(number1, number2, operand) {

    let result = 0; 
        // от тук нататък създаваме funtions, които да ползваме по-нататък
        // !!!! важно е че при errow фунциите трябва да ги създадем преди да ги използваме, за разлика от другите, където мже и след като ги използваме
        let multiply = (number1, number2) => number1 * number2
        let divide = (number1, number2) => number1 / number2
        let add = (number1, number2) => number1 + number2
        let subtract = (number1, number2) => number1 - number2


    switch(operand) {
        case "multiply":
            result = multiply(number1, number2) //отдолу създаваме function-а за да го ползваме тук
        break;
        case "divide":
            result = divide(number1, number2)  //отдолу създаваме function-а за да го ползваме тук
        break;
        case "add":
            result = add(number1, number2) //отдолу създаваме function-а за да го ползваме тук
        break;
        case "subtract":
            result = subtract(number1, number2) //отдолу създаваме function-а за да го ползваме тук
        break;
    }

console.log(result)

        
    }
simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract"); */