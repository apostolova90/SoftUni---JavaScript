function fruitMarket(arg1,arg2,arg3,arg4,arg5){

    let priceQgodi = Number(t[arg1]);
    let priceMalini = priceQgodi / 2;
    let pricePortokali = priceMalini - priceMalini * 0.4;
    let priceBanani = priceMalini - priceMalini * 0.8;

    let kgBanani = Number(input[arg2]);
    let kgPortokali = Number(input[arg3]);
    let kgMalini = Number(input[arg4]);
    let kgQgodi = Number(input[arg5]);

    let totalPrice = (priceQgodi * kgQgodi) + (priceMalini * kgMalini) + (pricePortokali * kgPortokali) + (priceBanani * kgBanani);

    console.log(totalPrice.toFixed(2));
}
fruitMarket(["48","10","3.3","6.5","1.7"]);
fruitMarket(["63.5","3.57","6.35","8.15","2.5"]);