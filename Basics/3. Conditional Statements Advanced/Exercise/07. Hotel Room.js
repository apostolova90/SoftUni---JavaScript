function hotelRoom(input){
    let month = input[0];
    let numberOfNights = Number(input[1]);

    let priceStudioMayOktober = 50;
    let priceApartmentMayOktober = 65;
    let priceStudioJuneSeptember = 75.20;
    let priceApartmentJuneSeptember = 68.70;
    let priceStudioJulyAugust = 76;
    let priceApartmentJulyAugust = 77;
    
    let totalMoneyStudio = 0;
    let totalMoneyApartment = 0;

switch (month) {
    case "May":
    case "October":
        totalMoneyStudio = priceStudioMayOktober * numberOfNights;
        totalMoneyApartment = priceApartmentMayOktober * numberOfNights;
if (numberOfNights > 7 && numberOfNights < 14) {
        totalMoneyStudio -= totalMoneyStudio * 0.05;
} else if (numberOfNights > 14) {
        totalMoneyStudio -= totalMoneyStudio * 0.30;
}
break;

    case "June":
    case "September":
        totalMoneyStudio = priceStudioJuneSeptember * numberOfNights;
        totalMoneyApartment = priceApartmentJuneSeptember * numberOfNights;
if (numberOfNights > 14) {
        totalMoneyStudio -= totalMoneyStudio * 0.20;
}
break;    
    
    case "July":
    case "August":
        totalMoneyStudio = priceStudioJulyAugust * numberOfNights;
        totalMoneyApartment = priceApartmentJulyAugust * numberOfNights;
break;
}

if (numberOfNights > 14) {
    totalMoneyApartment -= totalMoneyApartment * 0.1; 
}

console.log (`Apartment: ${totalMoneyApartment.toFixed(2)} lv.`);
console.log (`Studio: ${totalMoneyStudio.toFixed(2)} lv.`);
    
}
hotelRoom(["May","15"]);