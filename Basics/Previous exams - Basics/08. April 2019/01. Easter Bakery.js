function bakery(input) {

    const priceFlower = Number(input[0]);
    const priceSugar = priceFlower * 0.75;
    const priceEggsKora = priceFlower * 1.1;
    const priceMaq = priceSugar * 0.20;

    const kgFlower = Number(input[1]);
    const kgSugar = Number(input[2]);
    const koriEggs = Number(input[3]);
    const numberMaq = Number(input[4]);

    let totalPrice = (priceFlower * kgFlower)
    + (priceSugar * kgSugar) + (priceEggsKora * koriEggs)
    + (priceMaq * numberMaq);

    console.log(totalPrice.toFixed(2));
    
}
bakery(["50", "10", "3.5", "6", "1"]);
bakery(["63.44", "3.57", "6.35", "8", "2"]);
