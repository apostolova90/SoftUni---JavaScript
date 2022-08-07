function bikeRace (input) {
    const numberOfJuniors = Number(input[0]);
    const numberOfSeniors = Number(input[1]);
    const typeOfTRack = input[2];

    let priceJuniors = 0;
    let priceSeniors = 0;

switch (typeOfTRack) {
    case "trail": 
    priceJuniors = 5.50;
    priceSeniors = 7;
    break;

    case "cross-country":
    priceJuniors = 8;
    priceSeniors = 9.50;
    if (numberOfJuniors + numberOfSeniors >= 50) {
        priceJuniors = priceJuniors - (priceJuniors * 0.25);
        priceSeniors = priceSeniors - (priceSeniors * 0.25);
    } else {
        priceJuniors = 8;
        priceSeniors = 9.50;
    }
    break;        

    case "downhill":
    priceJuniors = 12.25;
    priceSeniors = 13.75;
    break;     

    case "road":
    priceJuniors = 20;
    priceSeniors = 21.50; 
    break;        
}

let priceForAllTickets = (priceJuniors * numberOfJuniors) + (priceSeniors * numberOfSeniors);
let finalProfit = priceForAllTickets - (priceForAllTickets * 0.05);

console.log(finalProfit.toFixed(2));

}
bikeRace (["10", "20", "trail"]);