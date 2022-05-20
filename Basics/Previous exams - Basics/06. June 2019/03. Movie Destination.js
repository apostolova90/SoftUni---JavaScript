function movieDestination(input) {

    let movieBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let numberNights = Number(input[3]);
    let pricePerNight = 0;

    if (season === "Winter"){
        switch(destination){
            case "Dubai":
            pricePerNight = 45000;
            break;
            case "Sofia":
            pricePerNight = 17000;
            break;
            case "London":
            pricePerNight = 24000;
            break;
        }
    } else if (season === "Summer"){
        switch(destination){
            case "Dubai":
            pricePerNight = 40000;
            break;
            case "Sofia":
            pricePerNight = 12500;
            break;
            case "London":
            pricePerNight = 20250;
            break;
        }
    }

    let totalPrice = pricePerNight * numberNights; 

    if (destination === "Dubai"){
        totalPrice = totalPrice - totalPrice * 0.3;
    } else if (destination === "Sofia"){
        totalPrice = totalPrice + totalPrice * 0.25;
    }

    let diff = Math.abs(movieBudget - totalPrice);

    if(movieBudget >= totalPrice){
        console.log(`The budget for the movie is enough! We have ${diff.toFixed(2)} leva left!`)
    } else {
        console.log(`The director needs ${diff.toFixed(2)} leva more!`)
    }

}
movieDestination(["400000", "Sofia", "Winter", "20"]);
movieDestination(["1000000", "Dubai", "Summer", "5"]);
movieDestination(["200000", "London", "Summer", "7"]);