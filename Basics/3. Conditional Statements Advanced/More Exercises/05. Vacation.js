function vacation(input){
    const budget = Number(input[0]);
    const season = input[1];

let place = 0;
let typeOfRoom = 0;
let price = 0;


    if (budget <= 1000) {
        switch (season) {
            case "Summer":
                typeOfRoom = "Camp";
                place = "Alaska";
                price = budget * 0.65;
                break;
        case "Winter":
                typeOfRoom = "Camp";
                place = "Morocco";
                price = budget * 0.45;
                break;
        } 
    } else if (budget > 1000 && budget<= 3000) {
        switch (season) {
            case "Summer":
                typeOfRoom = "Hut";
                place = "Alaska";
                price = budget * 0.80;
                break;
        case "Winter":
                typeOfRoom = "Hut";
                place = "Morocco";
                price = budget * 0.60;
                break;
        } 
    } else {
        switch (season) {
            case "Summer":
                typeOfRoom = "Hotel";
                place = "Alaska";
                price = budget * 0.90;
                break;
        case "Winter":
                typeOfRoom = "Hotel";
                place = "Morocco";
                price = budget * 0.90;
                break;
        } 

    }
    console.log (`${place} - ${typeOfRoom} - ${price.toFixed(2)}`)


}
vacation(["800", "Summer"]);
vacation(["799.50", "Winter"]);
vacation(["3460", "Summer"]);
vacation(["1100", "Summer"]);
vacation(["5000", "Winter"]);
vacation(["2543.99", "Winter"]);