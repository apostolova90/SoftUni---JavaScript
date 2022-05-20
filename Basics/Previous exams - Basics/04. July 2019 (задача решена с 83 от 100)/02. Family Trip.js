function familyTrip(input) {
    let budjet = Number(input[0]);
    let numberOfNights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percentAdditionalCosts = Number(input[3]);

    let additionalCosts = budjet * percentAdditionalCosts / 100;

    if (numberOfNights > 7){
        pricePerNight = pricePerNight - pricePerNight * 0.05
    } else {
        pricePerNight = pricePerNight + 0;
    }

    
    let totalMoneyNeeded = (numberOfNights * pricePerNight) + additionalCosts;

    let diff = Math.abs(budjet - totalMoneyNeeded);

    if (totalMoneyNeeded <= budjet){
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`)
    }
}
familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);
