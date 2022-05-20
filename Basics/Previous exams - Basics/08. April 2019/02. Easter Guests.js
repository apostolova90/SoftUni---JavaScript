function easterGuests(input) {
    const numberOfGuests = Number(input[0]);
    const budget = Number(input[1]);

    const priceKozunak = 4;
    const priceEgg = 0.45;

    let kozunakNeeded = Math.ceil(numberOfGuests / 3);
    let totalPriceKozunaci = kozunakNeeded * priceKozunak;

    let eggsNeeded = numberOfGuests * 2;
    let totalPriceEggs = eggsNeeded * priceEgg;

    let totalPriceNeededForAll = totalPriceKozunaci + totalPriceEggs;

    let difference = Math.abs(budget - totalPriceNeededForAll);

    if (budget >= totalPriceNeededForAll) {
        console.log (`Lyubo bought ${kozunakNeeded} Easter bread and ${eggsNeeded} eggs.`);
        console.log (`He has ${difference.toFixed(2)} lv. left.`)
    } else {
        console.log ("Lyubo doesn't have enough money.");
        console.log (`He needs ${difference.toFixed(2)} lv. more.`)
    }
}
easterGuests(["10", "35"]);
easterGuests(["9", "12"]);
