function alumninumJoinery (input){

    let numberJoinery = Number(input[0]);
    let typeOfJoinery = input[1];
    let deliveryType = input[2];

    let priceFor1Joinery = 0;
    
switch (typeOfJoinery) {
case "90X130":
    priceFor1Joinery = 110;
    if (numberJoinery >= 30 && numberJoinery < 60) {
        priceFor1Joinery = priceFor1Joinery - (priceFor1Joinery * 0.05);
    } else if (numberJoinery >= 60) {
        priceFor1Joinery = priceFor1Joinery - (priceFor1Joinery * 0.08);           
    }
break;

case "100X150":
    priceFor1Joinery = 140;
    if (numberJoinery >= 40 && numberJoinery < 80) {
        priceFor1Joinery = priceFor1Joinery - (priceFor1Joinery * 0.06);
    } else if (numberJoinery >= 80) {
        priceFor1Joinery = priceFor1Joinery - (priceFor1Joinery * 0.10);           
    }
break;

case "130X180":
    priceFor1Joinery = 190;
    if (numberJoinery >= 20 && numberJoinery < 50) {
        priceFor1Joinery = priceFor1Joinery - (priceFor1Joinery * 0.07);
    } else if (numberJoinery >= 50) {
        priceFor1Joinery = priceFor1Joinery - (priceFor1Joinery * 0.12);           
    }
break;

case "200X300":
    priceFor1Joinery = 250;
    if (numberJoinery >= 25 && numberJoinery < 50) {
        priceFor1Joinery = priceFor1Joinery - (priceFor1Joinery * 0.09);
    } else if (numberJoinery >= 50) {
        priceFor1Joinery = priceFor1Joinery - (priceFor1Joinery * 0.14);           
    }
break;
}

let finalPriceForAllJoinery = 0;

if (deliveryType === "With delivery") {
    finalPriceForAllJoinery = priceFor1Joinery * numberJoinery + 60;
} else {
    finalPriceForAllJoinery = priceFor1Joinery * numberJoinery;
}

if (numberJoinery > 99) {
    finalPriceForAllJoinery = finalPriceForAllJoinery - (finalPriceForAllJoinery * 0.04);
}

if (numberJoinery < 10) {
    console.log (`Invalid order`)
} else {
    console.log (`${finalPriceForAllJoinery.toFixed(2)} BGN`)
    }
}
alumninumJoinery (["2","130X180","With delivery"]);
