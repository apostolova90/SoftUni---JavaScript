function rental(input){
    const budget = Number(input[0]);
    const season = input[1];

    let vehicleClass = 0;
    let vehicleType = 0;
    let price = 0;
    if (budget <= 100) {
        switch (season) {
        case "Summer":
            vehicleClass = "Economy class";
            vehicleType = "Cabrio";
            price = budget * 0.35;
        break;
        case "Winter":
            vehicleClass = "Economy class";
            vehicleType = "Jeep";
            price = budget * 0.65;
        break;
        } 
    } else if (budget > 100 && budget <= 500) {
        switch (season) {
        case "Summer":
            vehicleClass = "Compact class";
            vehicleType = "Cabrio";
            price = budget * 0.45;
        break;
        case "Winter":
            vehicleClass = "Compact class";
            vehicleType = "Jeep";
            price = budget * 0.80;
        break;
        }
    } else {
        vehicleClass = "Luxury class";
            vehicleType = "Jeep";
        price = budget * 0.9;
    }
    console.log (`${vehicleClass}`);
    console.log (`${vehicleType} - ${price.toFixed(2)}`);
}
rental(["450", "Summer"]);
rental(["450", "Winter"]);
rental(["1010", "Summer"]);
rental(["99.99", "Summer"]);
rental(["1010", "Winter"]);
rental(["70.50", "Winter"]);