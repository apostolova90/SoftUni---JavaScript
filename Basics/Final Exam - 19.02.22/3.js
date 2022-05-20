// пререшена 27.02

function santa(input) {

    let numberOfNights = (Number(input[0] - 1));
    let typeOfRoom = input[1];
    let positiveNegative = input[2];


    let roomForOne = 18.00;
    let apartment = 25.00;
    let presidentApartment = 35;

    let totalPrice = 0;
    let priceAfterDiscount = 0;


    if (numberOfNights < 10){
    switch (typeOfRoom){
        case "room for one person":
        totalPrice = numberOfNights * roomForOne
        priceAfterDiscount = totalPrice;        
        break;
        case "apartment":
        totalPrice = numberOfNights * apartment;
        priceAfterDiscount = totalPrice - (totalPrice * 0.30);
        break;
        case "president apartment":
        totalPrice = numberOfNights * presidentApartment;
        priceAfterDiscount = totalPrice - (totalPrice * 0.10); 
    }
} else if (numberOfNights >= 10 && numberOfNights <= 15){
    switch (typeOfRoom){
        case "room for one person":
        totalPrice = numberOfNights * roomForOne
        priceAfterDiscount = totalPrice;        
        break;
        case "apartment":
        totalPrice = numberOfNights * apartment;
        priceAfterDiscount = totalPrice - (totalPrice * 0.35);
        break;
        case "president apartment":
        totalPrice = numberOfNights * presidentApartment;
        priceAfterDiscount = totalPrice - (totalPrice * 0.15); 
    }
} if (numberOfNights > 15){
    switch (typeOfRoom){
        case "room for one person":
        totalPrice = numberOfNights * roomForOne
        priceAfterDiscount = totalPrice;        
        break;
        case "apartment":
        totalPrice = numberOfNights * apartment;
        priceAfterDiscount = totalPrice - (totalPrice * 0.50);
        break;
        case "president apartment":
        totalPrice = numberOfNights * presidentApartment;
        priceAfterDiscount = totalPrice - (totalPrice * 0.20); 
    }
}

if (positiveNegative === "positive"){
    priceAfterDiscount = priceAfterDiscount + priceAfterDiscount * 0.25;
} else {
    priceAfterDiscount = priceAfterDiscount - priceAfterDiscount * 0.10;
}

console.log(priceAfterDiscount.toFixed(2))

}
santa(["14", "apartment", "positive"]);









/* function skiTrip(input){
    let priceRoomForOne = 18;
    let priceApartment = 25;
    let PricePresidentApartment = 35;

    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let rating = input[2];

    let nights = days - 1
    let totalPrice = 0;

switch (typeOfRoom) {
case "room for one person":
    totalPrice = nights * priceRoomForOne;
break;

case "apartment":
    totalPrice = nights * priceApartment;
    if (nights < 10) {
        totalPrice -= totalPrice * 0.30;
    } else if (nights >= 10 && nights <= 15) {
        totalPrice -= totalPrice * 0.35;
    } else {
        totalPrice -= totalPrice * 0.50
    }
break;

case "president apartment":
    totalPrice = nights * PricePresidentApartment;
    if (nights < 10) {
        totalPrice -= totalPrice * 0.10;
    } else if (nights >= 10 && nights <= 15) {
        totalPrice -= totalPrice * 0.15;
    } else {
        totalPrice -= totalPrice * 0.20
    }
break;
}

if (rating === "positive") {
    totalPrice += totalPrice * 0.25; 
} else { 
    totalPrice -= totalPrice * 0.10;
}
console.log(totalPrice.toFixed(2));
}
skiTrip(["30",
"president apartment",
"negative"]);
 */
