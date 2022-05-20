function mobileOperator(input) {
    let years = input[0];
    let typeOfContarct = input[1];
    let withInternetOrNot = input[2];
    let montsToPay = Number(input[3]);

    let priceOfPackage = 0

    if (years === "one"){
        switch (typeOfContarct) {
            case "Small":
            priceOfPackage = 9.98;
            break;
            case "Middle":
            priceOfPackage = 18.99;            
            break;
            case "Large":
            priceOfPackage = 25.98;
            break;
            case "ExtraLarge":
            priceOfPackage = 35.99;
            break;
        } 
    } else {
        switch (typeOfContarct) {
            case "Small":
            priceOfPackage = 8.58;
            break;
            case "Middle":
            priceOfPackage = 17.09;
            break;
            case "Large":
            priceOfPackage = 23.59;
            break;
            case "ExtraLarge":
            priceOfPackage = 31.79;
            break;
        }
    }

    if (withInternetOrNot === "yes" && priceOfPackage <= 10.00){
        priceOfPackage = priceOfPackage + 5.50;
    } else if ((withInternetOrNot === "yes") && (priceOfPackage > 10 && priceOfPackage <= 30)){
        priceOfPackage = priceOfPackage + 4.35;
    } else if ((withInternetOrNot === "yes") && (priceOfPackage > 30)) {
        priceOfPackage = priceOfPackage + 3.85;
    }

    let totalPricePerMonth = priceOfPackage * montsToPay;


    if (years === "two"){
        totalPricePerMonth = totalPricePerMonth - (totalPricePerMonth * 3.75 / 100);
    }
    console.log(`${totalPricePerMonth.toFixed(2)} lv.`);
}

mobileOperator(["one", "Small", "yes", "10"]);
mobileOperator(["two", "Large", "no", "10"]);