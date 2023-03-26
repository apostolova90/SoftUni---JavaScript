function roadRadar(speed, area){

switch (area){
case "motorway":
    if (speed <= 130){
        console.log(`Driving ${speed} km/h in a 130 zone`)
    } else if (speed > 130 && speed <= 150){
        let difference = speed - 130;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - speeding`)
    } else if (speed > 130 && speed > 150 && speed <= 170){
        let difference = speed - 130;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - excessive speeding`)
    } else {
        let difference = speed - 130;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - reckless driving`)
    }
    break;
case "interstate":
    if (speed <= 90 ){
        console.log(`Driving ${speed} km/h in a 90 zone`)
    } else if (speed > 90 && speed <= 110){
        let difference = speed - 90;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - speeding`)
    } else if (speed > 90 && speed > 110 && speed <= 130){
        let difference = speed - 90;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - excessive speeding`)
    } else {
        let difference = speed - 90;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - reckless driving`)
    }
    break;
case "city":
    if (speed <= 50 ){
        console.log(`Driving ${speed} km/h in a 50 zone`)
    } else if (speed > 50 && speed <= 70){
        let difference = speed - 50 ;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - speeding`)
    } else if (speed > 50  && speed > 70 && speed <= 90){
        let difference = speed - 50 ;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - excessive speeding`)
    } else {
        let difference = speed - 50 ;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - reckless driving`)
    }
    break;
case "residential":
    if (speed <= 20 ){
        console.log(`Driving ${speed} km/h in a 20 zone`)
    } else if (speed > 20 && speed <= 40){
        let difference = speed - 20 ;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - speeding`)
    } else if (speed > 20  && speed > 40 && speed <= 60){
        let difference = speed - 20 ;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - excessive speeding`)
    } else {
        let difference = speed - 20 ;
        console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - reckless driving`)
    }
    break;
    }
}
roadRadar(40, 'city');
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')
