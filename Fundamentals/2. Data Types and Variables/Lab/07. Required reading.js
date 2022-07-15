function requiredReading (pages, perHour, numberOfDays){

    let hoursNeeded = pages / perHour;
    let hoursPerDay = hoursNeeded / numberOfDays;

    console.log (hoursPerDay);
}
requiredReading (212,20,2);
requiredReading (432,15,4);
