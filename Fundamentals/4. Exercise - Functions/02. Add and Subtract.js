function mainFunction(first, second, third){

    let sumFirstAndSecond = sum(first, second);
    let finalResult = subtract(sumFirstAndSecond, third)
    
    console.log(finalResult)

    function sum(first, second){
        return first + second;
    }
    function subtract(sumFirstAndSecond, third){
        return sumFirstAndSecond - third
    }

}
mainFunction(23,6,10)


//arrow функция

/* function mainFunction(first, second, third){

    let sum = (first, second) => {
        return first + second;
    }
    let subtract =(sumFirstAndSecond, third) => {
        return sumFirstAndSecond - third
    }


    let sumFirstAndSecond = sum(first, second);
    let finalResult = subtract(sumFirstAndSecond, third)
    
    console.log(finalResult)

}
mainFunction(23,6,10) */