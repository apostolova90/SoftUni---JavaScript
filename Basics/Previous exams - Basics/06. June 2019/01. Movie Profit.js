function movieProfir(input){
    const nameOfMovie = input[0];
    const numberOfDays = Number(input[1]);
    const numberOfTickets = Number(input[2]);
    const pricePerTicket = Number(input[3]);
    const percentForTheTeater = Number(input[4]);

    let priCeForAllTicketsPerDay = numberOfTickets * pricePerTicket;
    let priceForAllTicketsForAllDays = priCeForAllTicketsPerDay * numberOfDays

    let forTheTeather = priceForAllTicketsForAllDays * percentForTheTeater / 100;

    let totalProfit = priceForAllTicketsForAllDays - forTheTeather;
    console.log(`The profit from the movie ${nameOfMovie} is ${totalProfit.toFixed(2)} lv.`);
}

movieProfir(["The Programmer","20","500","7.50","7"]);
movieProfir(["Python Basics","40","34785","10.45","14"]);
movieProfir(["The Jungle","22","20500","9.37","30"]);
