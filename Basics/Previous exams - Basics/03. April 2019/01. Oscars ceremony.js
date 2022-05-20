function oscarCeremony(input) {
    let priceRoom = Number(input[0]);

    let priceStatue = priceRoom - priceRoom * 0.30;
    let priceCetaring = priceStatue - priceStatue * 0.15;
    let priceMusic = priceCetaring / 2;

    let totalPrice = priceRoom + priceStatue + priceCetaring + priceMusic;

    console.log (totalPrice.toFixed(2));
}
oscarCeremony(["3500"])