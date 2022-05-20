function divisionWithoutRemainder(input){

    let n = Number(input[0]);
    let index = 1;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    let number = 0;

    for(let i = 1; i <= n; i++){
        number = Number(input[index]);
        index++
        if (number % 2 === 0){
            p1++
        } 
        if (number % 3 === 0){
            p2++
        }
         if (number % 4 === 0){
            p3++
        }
    }
    
    let percentageP1 = p1 / n * 100;
    let percentageP2 = p2 / n * 100;
    let percentageP3 = p3 / n * 100;

    console.log(`${percentageP1.toFixed(2)}%`);
    console.log(`${percentageP2.toFixed(2)}%`);
    console.log(`${percentageP3.toFixed(2)}%`);


}
divisionWithoutRemainder(["10","680","2","600","200","800","799","46","128","65"]);