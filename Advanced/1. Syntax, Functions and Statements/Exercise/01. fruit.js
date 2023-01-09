function fruits(fruitType, grams, price){

    let kilos = grams / 1000
    let totalPrice = kilos * price;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruitType}.`)

}
fruits('orange', 2500, 1.80);
fruits('apple', 1563, 2.35)