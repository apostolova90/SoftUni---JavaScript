function toySHop(input){
    let vacationPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let totalToysCount = puzzleCount + dollCount + bearCount + minionsCount + truckCount;
    let totalToysPrice = puzzleCount * puzzlePrice + dollCount * dollPrice + bearCount * bearPrice + minionsCount * minionPrice + truckCount * truckPrice;

    if (totalToysCount >= 50){
        totalToysPrice = totalToysPrice * 0.75;
    }

    totalToysPrice = totalToysPrice * 0.90;
    
    const difference = Math.abs(totalToysPrice - vacationPrice); 
    
    if (totalToysPrice >= vacationPrice){
        console.log(`Yes! ${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
    }
}
toySHop (["320","8","2","5","5","1"]);

