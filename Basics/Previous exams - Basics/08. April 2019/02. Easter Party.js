function easterParty(input) {
    const numberGuests = Number(input[0]);
    let priceBackage = Number(input[1]);
    const budget = Number(input[2]);
    let cakePrice = budget * 0.1;

    if (numberGuests >= 10 && numberGuests <= 15){
        priceBackage *= 0.85;
    } else if (numberGuests > 15 && numberGuests <= 20){
        priceBackage *= 0.80;
    } else if (numberGuests > 20){
        priceBackage *= 0.75;
    }

    let priceNeeded = cakePrice + (numberGuests * priceBackage);

    let difference = Math.abs(budget - priceNeeded);

    if (budget > priceNeeded){
        console.log(`It is party time! ${difference.toFixed(2)} leva left.`)
    } else {
        console.log(`No party! ${difference.toFixed(2)} leva needed.`)
    }
}
easterParty(["18", "30", "450"]);
easterParty(["8", "25", "340"]);
easterParty(["24", "35", "550"]);
