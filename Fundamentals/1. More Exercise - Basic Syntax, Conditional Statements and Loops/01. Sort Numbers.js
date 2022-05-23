function fortNumber(num1, num2, num3){

    let minNum = 0;
    let middleNum = 0;
    let maxNum = 0;
    
for (let i = 0; i < 3; i++){
    if(maxNum < num1){
        maxNum = num1
    } 
    if (maxNum < num2){
       maxNum = num2
    } 
    if (maxNum < num3){
        maxNum = num3
    }
    }
      
for (let i = 0; i < 3; i++){
    if(num1 < maxNum){
        minNum = num1
    } 
    if (minNum > num2){
        minNum = num2
    } 
    if (minNum > num3){
        minNum = num3
    }
    }

    if (num1 < maxNum && num1 > minNum){
        middleNum = num1
    } else if (num2 < maxNum && num2 > minNum){
        middleNum = num2
    } if (num3 < maxNum && num3 > minNum){
        middleNum = num3
    }
    
    console.log (maxNum)  
    console.log (middleNum)
    console.log (minNum)

    }

fortNumber(2,1,3)
fortNumber(-2,1,3)
fortNumber(0,0,2)

................... Judge дава че има грешка