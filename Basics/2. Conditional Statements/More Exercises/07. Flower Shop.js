function flowerShop (input){

    let numberMagnolii = Number(input[0]);
    let totalPriceMagnolii = numberMagnolii * 3.25;

    let numberHyacinths = Number(input[1]);
    let totalPriceHyacinths = numberHyacinths * 4;

    let numberRoses = Number(input[2]);
    let totalPriceRoses = numberRoses * 3.50;

    let numberCactus = Number(input[3]);
    let totalPriceCactus = numberCactus * 8;

    let ProfitAllFlowers = totalPriceMagnolii + totalPriceHyacinths + totalPriceRoses + totalPriceCactus;
    let totalProfitAfterTaxes = ProfitAllFlowers * 0.95;

    let presentPrice = Number(input[4]);

    let diffrence = Math.abs(presentPrice - totalProfitAfterTaxes);

if (presentPrice <= totalProfitAfterTaxes){
    console.log(`She is left with ${Math.floor(diffrence)} leva.`)
} else if (presentPrice > totalProfitAfterTaxes){
    console.log(`She will have to borrow ${Math.ceil(diffrence)} leva.`)
    }
}
flowerShop (["2","3","5","1","50"])