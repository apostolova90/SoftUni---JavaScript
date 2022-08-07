function pets(input){

    let numberOfDays = Number(input[0]);
    let foodLeftInKg = Number(input[1]);
    
    let dogFoodPerDayKg = Number(input[2]);
    let totalDogFoodNeeded = numberOfDays * dogFoodPerDayKg;

    let catFoodPerDayKg = Number(input[3]);
    let totalCatFoodNeeded = numberOfDays * catFoodPerDayKg;

    let turtleFoodPerDayGr = Number(input[4]);    
    let turtleFoodPerDayKg = turtleFoodPerDayGr / 1000;
    let totalTurtleFoodNeeded = numberOfDays * turtleFoodPerDayKg;

    let foodNeededFOrAll = totalDogFoodNeeded + totalCatFoodNeeded + totalTurtleFoodNeeded;

    let difference = Math.abs(foodLeftInKg - foodNeededFOrAll);

if (foodLeftInKg >= foodNeededFOrAll){
    console.log(`${Math.floor(difference)} kilos of food left.`)
    } else if (foodLeftInKg < foodNeededFOrAll){
    console.log(`${Math.ceil(difference)} more kilos of food are needed.`)
    }
}
pets(["2","10","1","1","1200"]);