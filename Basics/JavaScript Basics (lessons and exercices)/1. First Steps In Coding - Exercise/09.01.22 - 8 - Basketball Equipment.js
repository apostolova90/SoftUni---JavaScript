function basketballEquipment (input){
    const pricePerYear = Number(input[0]);
    const priceTrainers = pricePerYear - pricePerYear * 40 / 100;
    const priceClothes = priceTrainers - priceTrainers * 20 / 100;
    const priceBall = priceClothes / 4;
    const priceAccesories = priceBall / 5;
    const totalPrice = pricePerYear + priceTrainers + priceClothes + priceBall + priceAccesories;
    console.log (totalPrice);
 
 }
 
 basketballEquipment (["365"]);