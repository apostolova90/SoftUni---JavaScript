function oscarCeremony(input) {
    let priceRoom = Number(input[0]);

    let priceStatue = priceRoom - priceRoom * 0.30;
    let priceCatering = priceStatue - priceStatue * 0.15;
    let priceMusic = priceCatering / 2;

    let totalPrice = priceRoom + priceStatue + priceCatering + priceMusic;

    console.log (totalPrice.toFixed(2));
}
oscarCeremony(["3500"])