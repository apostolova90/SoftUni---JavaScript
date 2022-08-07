function journey(input){
    let budget = Number(input[0]);
    let season = input[1];

    let totalCost = 0;
    let destination = 0;
    let campOrHotel = 0;

switch (season) {
case "summer":
if (budget <= 100) {
    totalCost = budget * 0.30;
    destination = "Bulgaria";
    campOrHotel = "Camp";
} else if (budget > 100 && budget <= 1000) {
    totalCost = budget * 0.40;
    destination = "Balkans";
    campOrHotel = "Camp";
} else if (budget > 1000) {
    totalCost = budget * 0.90;
    destination = "Europe";
    campOrHotel = "Hotel";
}
    break;

case "winter":
if (budget <= 100) {
    totalCost = budget * 0.70;
    destination = "Bulgaria";
    campOrHotel = "Hotel";
} else if (budget > 100 && budget <= 1000) {
    totalCost = budget * 0.80;
    destination = "Balkans";
    campOrHotel = "Hotel";
} else if (budget > 1000) {
    totalCost = budget * 0.90;
    destination = "Europe";
    campOrHotel = "Hotel";
    
}
    break;
}


console.log (`Somewhere in ${destination}`);
console.log (`${campOrHotel} - ${totalCost.toFixed(2)}`)
}
journey(["75","winter"]);