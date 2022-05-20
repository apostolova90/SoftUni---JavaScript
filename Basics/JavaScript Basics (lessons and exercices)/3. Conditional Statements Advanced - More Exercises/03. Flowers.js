function flowers (input) {
    const quantityChrysanthemums = Number(input[0]);
    const quantityRoses = Number(input[1]);
    const quantityTulips = Number(input[2]);
    const season = input[3];
    const holidayOrNot = input[4];
 
    let priceChrSpringSummer = 2;
    let priceChrAutumnWinter = 3.75;
    let priceRosesSpringSummer = 4.10;
    let priceRosesAutumnWinter = 4.50;
    let priceTulipsSpringSummer = 2.50;
    let priceTulipsAutumnWinter = 4.15;
 
    let quantityOfAllFlowers = quantityTulips + quantityRoses + quantityChrysanthemums;
 
    let priceForAllFlowers = 0;
 
    switch (season){
        case "Spring":
        case "Summer":
            priceForAllFlowers = (quantityChrysanthemums * priceChrSpringSummer) + (quantityRoses * priceRosesSpringSummer) + (quantityTulips * priceTulipsSpringSummer); 
        switch (holidayOrNot) {
            case "Y":
                priceForAllFlowers += priceForAllFlowers * 0.15;
            } if (quantityTulips >= 7 && season == "Spring") {
                priceForAllFlowers -= priceForAllFlowers * 0.05;       
        } 
        break;
                
        case "Autumn":
        case "Winter":
            priceForAllFlowers = (quantityChrysanthemums * priceChrAutumnWinter) + (quantityRoses * priceRosesAutumnWinter) + (quantityTulips * priceTulipsAutumnWinter); 
        switch (holidayOrNot) {
            case "Y":
                priceForAllFlowers += priceForAllFlowers * 0.15;
            } if (quantityRoses >= 10 && season === "Winter") {
                priceForAllFlowers -= priceForAllFlowers * 0.10;          
        } 
        break;
    } 
    
if (quantityOfAllFlowers >= 20) {
    priceForAllFlowers -= priceForAllFlowers * 0.20;
}    
    console.log ((priceForAllFlowers + 2).toFixed(2));
}
 
flowers (["3","10","9","Winter","N"]);