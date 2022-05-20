function goddzillaVsKong(input){
    const budget = Number(input[0]);
    const numberStuntMan = Number(input[1]);
    const priceClothesPerStuntMan = Number(input[2]);

    let decor = budget * 0.10;
    let priceAllClothes = numberStuntMan * priceClothesPerStuntMan;

    if (numberStuntMan >= 150){
        priceAllClothes = priceAllClothes - priceAllClothes * 0.10;
    }

    let allMoneyNeeded = decor + priceAllClothes;
    let difference = Math.abs(budget - allMoneyNeeded);

    if (allMoneyNeeded <= budget){
        console.log (`Action!`);
        console.log (`Wingard starts filming with ${difference.toFixed(2)} leva left.`)
    } else {
        console.log (`Not enough money!`);
        console.log (`Wingard needs ${difference.toFixed(2)} leva more.`) 
    }
}
goddzillaVsKong (["20000", "120","55.5"]);
goddzillaVsKong (["15437.62","186","57.99"]);
goddzillaVsKong (["9587.88","222","55.68"]);