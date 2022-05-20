function Vegetable (input){
    const vegetablePrice = Number(input[0]);
    const fruitPrice = Number(input[1]);
    const vegetableKg = Number(input[2]);
    const fruitKg = Number(input[3]);
    const vegetableTotalPrice = vegetablePrice * vegetableKg;
    const fruitTotalPrice = fruitPrice * fruitKg;
    const vegetableTotalPriceInEur = vegetableTotalPrice / 1.94;
    const fruitTotalPriceInEur = fruitTotalPrice / 1.94;
    const totalProfit = vegetableTotalPriceInEur + fruitTotalPriceInEur
    console.log (totalProfit.toFixed(2));
}

Vegetable (["0.194", "19.4", "10", "10"]);