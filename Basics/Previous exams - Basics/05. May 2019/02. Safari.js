function safari(input) {

    let pricePerLitter = 2.1;
    let priceTravel = 100;
    let budget = Number(input[0]);
    let littersNeeded = Number(input[1]);
    let day = input[2];

    let priceGas = pricePerLitter * littersNeeded;

    let totalPrice = priceTravel + priceGas;
    if (day === "Saturday"){
        totalPrice = totalPrice - totalPrice * 0.1;
    } else {
        totalPrice = totalPrice - totalPrice * 0.2;
    }

    let difference = Math.abs(budget - totalPrice);

    if (budget >= totalPrice){
        console.log(`Safari time! Money left: ${difference.toFixed(2)} lv. `)
    } else {
        console.log(`Not enough money! Money needed: ${difference.toFixed(2)} lv.`)
    }
}
safari(["1000", "10", "Sunday"]);
/* safari(["120", "30", "Saturday"]);
 */