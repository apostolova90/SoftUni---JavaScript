function tennisEquipment(input){
    let priceTenisRaketa = Number(input[0]);
    let priceSneakers = priceTenisRaketa /6;
    let numberOfRaketi = Number(input[1]);
    let numberOfSneakers = Number(input[2]);

    let totalPriceRaketi = priceTenisRaketa * numberOfRaketi;
    let totalPriveSneakers = priceSneakers * numberOfSneakers;
    let priceClothes = (totalPriceRaketi + totalPriveSneakers) * 0.20;

    let totoalPriceForAll = totalPriceRaketi + totalPriveSneakers + priceClothes;
    let toBePaidByPlayer = totoalPriceForAll / 8;
    let toBePaidBySponsors = toBePaidByPlayer * 7;

    console.log(`Price to be paid by Djokovic ${Math.floor(toBePaidByPlayer)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(toBePaidBySponsors)}`);

}
tennisEquipment(["850","4","2"]);
tennisEquipment(["386","7","4"]);