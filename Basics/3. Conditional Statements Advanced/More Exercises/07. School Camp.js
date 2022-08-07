function camp(input){
    const season = input[0];
    const group = input[1];
    const students = Number(input[2]);
    const nights = Number(input[3]);

    let pricePerNight = 0;
    let sport = 0;
    let subTotal = 0;
    let finalPrice = 0;

    if (season === "Winter") {
        switch (group) {
            case "boys":
                pricePerNight = 9.6;
                sport = 'Judo';
                break;
            case "girls":
                pricePerNight = 9.6;
                sport = 'Gymnastics';
                break;
            case "mixed":
                pricePerNight = 10;
                sport = 'Ski';    
                break;
        }
    } else if (season === "Spring") {
        switch (group) {
            case "boys":
                pricePerNight = 7.2;
                sport = 'Tennis';
                break;
            case "girls":
                pricePerNight = 7.2;
                sport = 'Athletics';
                break;
            case "mixed":
                pricePerNight = 9.5;
                sport = 'Cycling';    
                break;
        }
    } else {
        switch (group) {
            case "boys":
                pricePerNight = 15;
                sport = 'Football';
                break;
            case "girls":
                pricePerNight = 15;
                sport = 'Volleyball';
                break;
            case "mixed":
                pricePerNight = 20;
                sport = 'Swimming';    
                break;
        }
    }
    subTotal = pricePerNight * students * nights;
    if (students >= 50){
        finalPrice = subTotal - subTotal * 0.5;
    } else if (students >= 20 && students < 50) {
        finalPrice = subTotal - subTotal * 0.15;
    } else if (students >= 10 && students < 20) {
        finalPrice = subTotal - subTotal * 0.05;
    } else {
        finalPrice = subTotal;
    }
    console.log(`${sport} ${finalPrice.toFixed(2)} lv.`)
}
camp(["Spring", "girls", "20", "7"]);
camp(["Winter", "mixed", "9", "15"]);
camp(["Summer", "boys", "60", "7"]);
camp(["Spring", "mixed", "17", "14"]);