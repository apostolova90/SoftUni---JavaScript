function transportPrice(input){

    let numberOfKm = Number(input[0]);
    let dayOrNight = input[1];

    let wayToTravel = 0

    let travelTaxiDay = 0.70 + numberOfKm * 0.79;
    let travelTaxiNight = 0.70 + numberOfKm * 0.90;
    let travelWithTaxi = travelTaxiDay || travelTaxiNight;

    let travelBusDayOrNight = numberOfKm * 0.09;
    let travelTrainDayOrNight = numberOfKm * 0.06;

if (numberOfKm < 20){
    wayToTravel = travelWithTaxi
}
else if (numberOfKm >= 20 && numberOfKm < 100){
    wayToTravel = travelBusDayOrNight
} else { 
    wayToTravel = travelTrainDayOrNight
    }

if ((dayOrNight === "day") && (wayToTravel === travelWithTaxi)){
    console.log (travelTaxiDay.toFixed(2))
} 
else if ((dayOrNight === "night") && (wayToTravel === travelWithTaxi)){
    console.log (travelTaxiNight.toFixed(2))
}
else if ((dayOrNight === "day" || "night") && (wayToTravel === travelBusDayOrNight)){
    console.log (travelBusDayOrNight.toFixed(2))
} 
else if ((dayOrNight === "day" || "night") && (wayToTravel === travelTrainDayOrNight)){
    console.log (travelTrainDayOrNight.toFixed(2))
    }
}
transportPrice (["5","day"]);