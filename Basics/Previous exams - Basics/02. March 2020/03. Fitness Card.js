function fitnessCard (input) {

    const moneyWeHave = Number(input[0]);
    const gender = input[1];
    const age = Number(input[2]);
    const sport = input[3];

    let cardPrice = 0;

    if (gender === "m"){
        switch (sport) {
            case "Gym":
                cardPrice = 42;
            break;
            case "Boxing":
                cardPrice = 41;
            break;
            case "Yoga":
                cardPrice = 45;
            break;
            case "Zumba":
                cardPrice = 34;
            break;
            case "Dances":
                cardPrice = 51;
            break;
            case "Pilates":
                cardPrice = 39;
            break;
        }
    } else {
        switch (sport) {
            case "Gym":
                cardPrice = 35;
            break;
            case "Boxing":
                cardPrice = 37;
            break;
            case "Yoga":
                cardPrice = 42;
            break;
            case "Zumba":
                cardPrice = 31;
            break;
            case "Dances":
                cardPrice = 53;
            break;
            case "Pilates":
                cardPrice = 37;
            break;
        }
    }

if (age <= 19) {
cardPrice = cardPrice - cardPrice * 0.20;
} else {
    cardPrice = cardPrice + 0;
}

let difference = Math.abs(moneyWeHave - cardPrice);

if (moneyWeHave >= cardPrice) {
    console.log (`You purchased a 1 month pass for ${sport}.`)
} else {
    console.log (`You don't have enough money! You need $${difference.toFixed(2)} more.`)
    }
}
fitnessCard (["50","m","23","Gym"]);
fitnessCard (["20","f","15","Yoga"]);
fitnessCard (["10","m","50","Pilates"]);