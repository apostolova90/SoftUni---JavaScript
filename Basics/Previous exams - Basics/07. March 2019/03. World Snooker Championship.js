function worlsSnookerCh(input) {

    let stage = input[0];
    let typeTicket = input[1];
    let numberTickets = Number(input[2]);
    let pictureOrNo = input[3];

    let priceTicket = 0;


    if (stage === "Quarter final"){
switch (typeTicket){
    case "Standard":
    priceTicket = 55.50;
    break;
    case "Premium":
    priceTicket = 105.20;
    break;
    case "VIP":
    priceTicket = 118.90;
    break;
}
    } else if (stage === "Semi final"){
        switch (typeTicket){
            case "Standard":
            priceTicket = 75.88;
            break;
            case "Premium":
            priceTicket = 125.22 ;
            break;
            case "VIP":
            priceTicket = 300.40 ;
            break;
        } 
    }else if (stage === "Final"){
        switch (typeTicket){
            case "Standard":
            priceTicket = 110.10;
            break;
            case "Premium":
            priceTicket = 160.66;
            break;
            case "VIP":
            priceTicket = 400;
            break;
        } 
    }

let totalPrice = numberTickets * priceTicket;


if (totalPrice > 2500 && totalPrice <= 4000) {
    totalPrice = totalPrice * 0.90;
    if (pictureOrNo === "Y") {
    totalPrice += numberTickets * 40;
    }
} else if (totalPrice > 4000){
    totalPrice = totalPrice * 0.75;
} else { 
    if(pictureOrNo === "Y")
    totalPrice += numberTickets * 40;
}
console.log(totalPrice.toFixed(2));
}
worlsSnookerCh(["Final", "Premium", "25", "Y"]);
worlsSnookerCh(["Semi final", "VIP", "9", "Y"]);
worlsSnookerCh(["Quarter final", "Standard", "11", "N"]);
