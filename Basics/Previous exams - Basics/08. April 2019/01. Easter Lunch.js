function easterBakery(input) {
    const priceKozunak = 3.20;
    const priceEggs = 4.35;
    const priceKurabii = 5.40;
    const painPricetEggs = 0.15;

    const numberZokunaci = Number(input[0]);
    const koriEggs = Number(input[1]);
    const kgKurabii = Number(input[2]);

    let totoalPricePaintForEggs = painPricetEggs * (koriEggs * 12);
    let totalPriceNeeded = totoalPricePaintForEggs 
    + (priceEggs * koriEggs) + (priceKozunak * numberZokunaci)
    + (priceKurabii * kgKurabii)

    console.log(totalPriceNeeded.toFixed(2));
}
easterBakery(["3", "2", "3"]);
easterBakery(["4", "4", "3"]);
