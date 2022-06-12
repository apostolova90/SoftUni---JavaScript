function passwordValidator(password) {


    function isLengthBetweenSixAndTen(string) {
        if ((string.length >= 6 && string.length <= 10)) {
            return true;
        } else {
            return false;
        }
    }


    function doesItHaveOnlyLettersAndNums(string) {
        for (let iterator of string) {
            let charCode = iterator.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) && 
            !(charCode >= 65 && charCode <= 90) && 
            !(charCode >= 97 && charCode <= 122)){
                return false;
            } 
       } return true;
    }


    function hasAtLeastTwoDigits(string) {
        let counter = 0;
        for (let iterator of string) {
            let charCode = iterator.charCodeAt(0);
            if(charCode >= 48 && charCode <= 57){
                counter++;
            } 
        }
        return counter >= 2;
    }



    let isLengthValid = isLengthBetweenSixAndTen(password);
    let doesItContainLettersAndNums = doesItHaveOnlyLettersAndNums(password);
    let hasAtLeastTwoNums = hasAtLeastTwoDigits(password);

    if (isLengthValid && doesItContainLettersAndNums && hasAtLeastTwoNums){
        console.log('Password is valid');
    } else {
        if (!isLengthValid){
            console.log('Password must be between 6 and 10 characters');
        } 
        if(!doesItContainLettersAndNums) {
            console.log('Password must consist only of letters and digits');
        }
        if (!hasAtLeastTwoNums){
            console.log('Password must have at least 2 digits');
        }
    }
}


passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')







/* 90/100..............

function passwordValidator(input){

    let counter = 0;
    let numberCounter = 0;

    for (let i = 0; i < input.length; i++){
        let string = input[i];
        counter++

        if (/\d/.test(string)){
            numberCounter++
          }
        }



        if (counter < 6 || counter > 10){
            console.log("Password must be between 6 and 10 characters")
        }

        if (!onlyLettersAndDigits(input)){
            console.log("Password must consist only of letters and digits")
          }
          
        if (numberCounter < 2){
            console.log("Password must have at least 2 digits")
        }


        if (counter >= 6 && counter <= 10 && (numberCounter >= 2) && (isOnlyLettersAndD = 1)){
            console.log("Password is valid")
        }



        function onlyLettersAndDigits(pass){
        return /^[A-Za-z0-9]*$/.test(pass);     
        }   
    
}
passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')
*/




/* 
90/100............
друго подобно решение

function sumOfTwoNumbers(firstNumber, secondNumber){

    let sum = firstNumber + secondNumber;
    return sum;

} */


/* function passwordValidator(input){

    let counter = 0;
    let numberCounter = 0;
    let numbersAndDigits = 0;


    for (let i = 0; i < input.length; i++){
        let string = input[i];
        counter++

        if (/\d/.test(string)){
            numberCounter++
          }
        }



        if (counter < 6){
            console.log("Password must be between 6 and 10 characters")
        }

        if (/^[A-Za-z0-9]*$/.test(input)){
            numbersAndDigits++
          } else {
            console.log("Password must consist only of letters and digits")
          }
          
        if (numberCounter < 2){
            console.log("Password must have at least 2 digits")
        }


        if ((counter >= 6) && (numberCounter >= 2) && (isOnlyLettersAndD = 1)){
            console.log("Password is valid")
        }

        }
        

passwordValidator('logIn')
passwordValidator('MyPass123')
passwordValidator('Pa$s$s')
 */