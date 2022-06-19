function pointsValidation(arry){
 
    let arryLen = arry.length
 
    function distanceBetweenTwoPoints(x1, y1, x2, y2){
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2) )
    }

 
    let newX1 = arry[0]
    let newY1 = arry[1]
    let newX2 = arry[2]
    let newY2 =arry[3]
 
    let result1 = distanceBetweenTwoPoints(newX1, newY1, 0, 0)
    if(Number. isInteger(result1)){
        console.log(`{${newX1}, ${newY1}} to {0, 0} is valid`)
    } else {
        console.log(`{${newX1}, ${newY1}} to {0, 0} is invalid`)
    }
 
    let result2 = distanceBetweenTwoPoints(newX2, newY2, 0, 0)
    if(Number.isInteger(result2)){
        console.log(`{${newX2}, ${newY2}} to {0, 0} is valid`)
    } else {
        console.log(`{${newX2}, ${newY2}} to {0, 0} is invalid`)
 
    }
 
    let result3 = distanceBetweenTwoPoints(newX1, newY1, newX2, newY2)
    if(Number.isInteger(result3)){
        console.log(`{${newX1}, ${newY1}} to {${newX2}, ${newY2}} is valid`)
    } else {
        console.log(`{${newX1}, ${newY1}} to {${newX2}, ${newY2}} is invalid`)
    }
 
 
}
pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])