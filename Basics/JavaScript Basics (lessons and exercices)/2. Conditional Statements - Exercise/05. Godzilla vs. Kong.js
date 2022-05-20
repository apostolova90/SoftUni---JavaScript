function GodzillaVsKingkong(input){

    let movieBudget = Number(input[0]);
    let stuntManNumber = Number(input[1]);
    let clotherPrice = Number(input[2]);
    let decor = movieBudget * 0.10;
    let allClothesPrice = stuntManNumber * clotherPrice;

if (stuntManNumber >=150){
        allClothesPrice = allClothesPrice - allClothesPrice * 0.10
    }

    let moneyNeeded = allClothesPrice + decor
    let difference = Math.abs(movieBudget - moneyNeeded);

if (movieBudget < moneyNeeded){
    console.log("Not enough money!")
    console.log(`Wingard needs ${difference.toFixed(2)} leva more.`);
} else if (movieBudget >= moneyNeeded){
    console.log("Action!")
    console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    }
}   
GodzillaVsKingkong (["20000","120","55.5"]);
