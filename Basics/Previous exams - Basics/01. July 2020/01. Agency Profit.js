function agancyProfit (input){

    let nameOfAgency = input[0];
    let numberOfTicketsForEdults = Number(input[1]);
    let numberOfTicketsKids = Number(input[2]);
    let priceTicketsAdults = Number(input[3]);
    let priceTicketsKids = priceTicketsAdults * 0.30;
    let aditionaltaxes = Number(input[4]);

    let finalPriceTicketsAdults = priceTicketsAdults + aditionaltaxes;
    let finalPriceTicketsKids = priceTicketsKids + aditionaltaxes;

    let finalIncomeFromAllTickets = (numberOfTicketsForEdults * finalPriceTicketsAdults) + (numberOfTicketsKids * finalPriceTicketsKids);

    let finalProfit = finalIncomeFromAllTickets * 0.20;

    console.log(`The profit of your agency from ${nameOfAgency} tickets is ${finalProfit.toFixed(2)} lv.`);
}
agancyProfit (["WizzaAir","15","5","120","40"]);