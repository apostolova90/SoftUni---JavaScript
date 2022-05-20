function filmPremiere(input) {
    let nameOfMovie = input[0];
    let typeOfPackage = input[1];
    let numberOfTickets = Number(input[2]);

    let priceOfTicket = 0;
    let totalPrice = 0;

    if (typeOfPackage === "Drink"){
        switch (nameOfMovie){
            case "John Wick":
            priceOfTicket = 12;
            break;
            case "Star Wars":
            priceOfTicket = 18;
            break;
            case "Jumanji":
            priceOfTicket = 9;
            break;
        }
    } else if (typeOfPackage === "Popcorn"){
        switch (nameOfMovie){
            case "John Wick":
            priceOfTicket = 15;
            break;
            case "Star Wars":
            priceOfTicket = 25;
            break;
            case "Jumanji":
            priceOfTicket = 11;
            break;
        }
    } else {
        switch (nameOfMovie){
            case "John Wick":
            priceOfTicket = 19;
            break;
            case "Star Wars":
            priceOfTicket = 30;
            break;
            case "Jumanji":
            priceOfTicket = 14;
            break;
        }
    }

    totalPrice = numberOfTickets * priceOfTicket;

    if (nameOfMovie === "Star Wars" && numberOfTickets >= 4){
        totalPrice = totalPrice - totalPrice * 0.30;
    } else if (nameOfMovie === "Jumanji" && numberOfTickets === 2){
        totalPrice = totalPrice - totalPrice * 0.15;
    }

    console.log (`Your bill is ${totalPrice.toFixed(2)} leva.`)
}
filmPremiere(["John Wick", "Drink", "6"]);
filmPremiere(["Star Wars", "Popcorn", "4"]);
filmPremiere(["Jumanji", "Menu", "2"]);