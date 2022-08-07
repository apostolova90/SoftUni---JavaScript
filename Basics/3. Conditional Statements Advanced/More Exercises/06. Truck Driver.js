function truck(input){
    const season = input[0];
    const kmPerMonth = Number(input[1]);
    // 1 season = 4 months
    const tax = 0.1;
    let pricePerKm = 0;
    let totalPriceBeforeTax = 0;
    let totalPriceAfterTax = 0;

    if (kmPerMonth <= 5000 ){
        switch (season) {
            case 'Spring':
            case 'Autumn':
                pricePerKm = 0.75;
                break;
            case 'Summer':
                pricePerKm = 0.9;
                break;
            case 'Winter':
                pricePerKm = 1.05;
                break;
        }
    } else if (kmPerMonth > 5000 && kmPerMonth <= 10000){
        switch (season) {
            case 'Spring':
            case 'Autumn':
                pricePerKm = 0.95;
                break;
            case 'Summer':
                pricePerKm = 1.1;
                break;
            case 'Winter':
                pricePerKm = 1.25;
                break;
        }
    } else {
        pricePerKm = 1.45;
    }
totalPriceBeforeTax = (kmPerMonth * pricePerKm) * 4;
totalPriceAfterTax = totalPriceBeforeTax - totalPriceBeforeTax * tax;

console.log (totalPriceAfterTax.toFixed(2))

}
truck(["Summer", "3455"]);
truck(["Winter", "4350"]);
truck(["Spring", "1600"]);
truck(["Winter", "5678"]);
truck(["Autumn", "8600"]);
truck(["Winter", "16042"]);
truck(["Spring", "16942"]);