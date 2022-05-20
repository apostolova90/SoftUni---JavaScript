function addBags (input){
    let priceOfBagsOver20Kg = Number(input[0]);
    let bagsKg = Number(input[1]);
    let daysOfTravel = Number(input[2]);
    let numberOfBags = Number(input[3]);

    let finalPriceBgas = 0;

    if (bagsKg > 20) {
        finalPriceBgas = priceOfBagsOver20Kg;
    } else if (bagsKg < 10) {
        finalPriceBgas = priceOfBagsOver20Kg * 0.20;
    } else {
        finalPriceBgas = priceOfBagsOver20Kg * 0.50;
    }
   
    if (daysOfTravel > 30) {
        finalPriceBgas = finalPriceBgas + (finalPriceBgas * 0.10);
    } else if (daysOfTravel >= 7 && daysOfTravel <= 30) {
        finalPriceBgas = finalPriceBgas + (finalPriceBgas * 0.15);
    } else {
        finalPriceBgas = finalPriceBgas + (finalPriceBgas * 0.40);
    }

    let finalPriceFOrAllBags = numberOfBags * finalPriceBgas;

    console.log(`The total price of bags is: ${finalPriceFOrAllBags.toFixed(2)} lv.`)
}
addBags (["63.80","23","3","1"]);