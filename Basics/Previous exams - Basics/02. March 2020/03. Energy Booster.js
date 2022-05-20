function energyBooster (input) {
    const flavour = input[0];
    const size = input[1];
    const numbersOfSets = Number(input[2]);
    
    let priceForOne = 0;
    let numberInPackage = 0;

    
if (size === "small") {
    numberInPackage = 2;
} else {
    numberInPackage = 5
}


if (size === "small"){
    switch (flavour) {
        case "Watermelon":
            priceForOne = 56;
        break;
        case "Mango":
            priceForOne = 36.66;
        break;
        case "Pineapple":
            priceForOne = 42.10;
        break;
        case "Raspberry":
            priceForOne = 20;
        break;
    }  
} else {
    switch (flavour) {
        case "Watermelon":
            priceForOne = 28.70;
        break;
        case "Mango":
            priceForOne = 19.60;
        break;
        case "Pineapple":
            priceForOne = 24.80;
        break;
        case "Raspberry":
            priceForOne = 15.2;
        break;
        }
    }

let totalPrice = numbersOfSets * numberInPackage * priceForOne;

if (totalPrice >= 400 && totalPrice <= 1000) {
    totalPrice = totalPrice - totalPrice * 0.15;
} else if (totalPrice > 1000) {
    totalPrice = totalPrice - totalPrice * 0.50;

}

    console.log (`${totalPrice.toFixed(2)} lv.`);
}
energyBooster (["Watermelon","big","4"]);
energyBooster (["Pineapple","small","1"]);