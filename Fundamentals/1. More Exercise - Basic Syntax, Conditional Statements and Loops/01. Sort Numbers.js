function sortNumber(num1, num2, num3){

    let minNum = 0;
    let middleNum = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;
    
for (let i = 1; i < 3; i++){
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
      
for (let i = 1; i < 3; i++){
    if (num1 < num2 && num1 < num3){
        minNum = num1
    } 
    if (num2 < num1 && num2 < num3){
        minNum = num2
    } 
    if (num3 < num1 && num3 < num2){
        minNum = num3
    }
    }

if (num1 < maxNum && num1 > minNum){
    middleNum = num1
} 
if (num2 < maxNum && num2 > minNum){
    middleNum = num2
} 
if (num3 < maxNum && num3 > minNum){
    middleNum = num3
}

    
console.log (maxNum)  
console.log (middleNum)
console.log (minNum)

}

sortNumber(2,1,3)
sortNumber(-2,1,3)
sortNumber(0,0,2)
sortNumber(2,5,2)


....................... Judge дава че има грешка 