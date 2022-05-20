function trainingLab (input){
    const scumriqPrice = Number(input[0]);
    const cacaPrice = Number(input[1]);
    const palamudPrice = scumriqPrice + (scumriqPrice * 60 / 100);
    const safridPrice = cacaPrice + (cacaPrice * 80 / 100);
    const palamudKg = Number(input[2]);
    const safridKg = Number(input[3]);
    const midiKg = Number(input[4]);
    const midiPrice = 7.50;

    const palamudTotalPrice = palamudPrice * palamudKg;
    const safridTotalPrice = safridPrice * safridKg;
    const midiTotalPrice = midiPrice * midiKg;
    const totoalPriceForAllFishes = palamudTotalPrice + safridTotalPrice + midiTotalPrice
    console.log (totoalPriceForAllFishes.toFixed(2));
}

trainingLab (["6.90", "4.20", "1.5", "2.5", "1"]);