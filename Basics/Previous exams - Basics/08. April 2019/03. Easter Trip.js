function easterTrip(input) {
    const destination = input[0];
    const dates = (input[1]);
    const numberOfNights = Number(input[2]);
    let pricePerNight = 0;

    if (destination === "France"){
        switch (dates){
            case "21-23":
            pricePerNight = 30;
            break;
            case "24-27":
            pricePerNight = 35;
            break;
            case "28-31":
            pricePerNight = 40;
            break;
        }
    } else if (destination === "Italy"){
        switch (dates){
            case "21-23":
            pricePerNight = 28;
            break;
            case "24-27":
            pricePerNight = 32;
            break;
            case "28-31":
            pricePerNight = 39;
            break;
        }
    } else if (destination === "Germany"){
        switch (dates){
            case "21-23":
            pricePerNight = 32;
            break;
            case "24-27":
            pricePerNight = 37;
            break;
            case "28-31":
            pricePerNight = 43;
            break;
        }
    }
    
    let totalPriceExcursion = numberOfNights * pricePerNight;
    console.log(`Easter trip to ${destination} : ${totalPriceExcursion.toFixed(2)} leva.`)
}
easterTrip(["Germany", "24-27", "5"]);
easterTrip(["Italy", "21-23", "7"]);
easterTrip(["France", "28-31", "8"]);
