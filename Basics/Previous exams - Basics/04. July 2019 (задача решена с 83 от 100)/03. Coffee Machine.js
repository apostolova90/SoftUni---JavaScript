function coffeeMachine (input) {
  let typeOfDrink = input[0];
  let withSugarOrNot = input[1];
  let numberOfDrinks = input[2];

  let pricePerDrink = 0;

  if (withSugarOrNot === "Without")
    switch (typeOfDrink) {
      case "Espresso":
        pricePerDrink = 0.9;
        break;
      case "Cappuccino":
        pricePerDrink = 1;
        break;
      case "Tea":
        pricePerDrink = 0.5;
        break;
    } else if (withSugarOrNot === "Normal")
    switch (typeOfDrink) {
      case "Espresso":
        pricePerDrink = 1;
        break;
      case "Cappuccino":
        pricePerDrink = 1.2;
        break;
      case "Tea":
        pricePerDrink = 0.6;
        break;
    } else {
    switch (typeOfDrink) {
        case "Espresso":
        pricePerDrink = 1.2;
        break;
        case "Cappuccino":
        pricePerDrink = 1.6;
        break;
        case "Tea":
        pricePerDrink = 0.7;
        break;
        }
    }
    
    let totalPrice = numberOfDrinks * pricePerDrink;

    if (withSugarOrNot === "Without"){
        totalPrice = totalPrice - totalPrice * 0.35;
    }
    if (typeOfDrink === "Espresso" && numberOfDrinks >= 5){
        totalPrice = totalPrice - totalPrice * 0.25;
    }
    if (totalPrice > 15){
        totalPrice = totalPrice - totalPrice * 0.20;
    }
    console.log (`You bought ${numberOfDrinks} cups of ${typeOfDrink} for ${totalPrice.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine[("Cappuccino", "Normal", "13")];
coffeeMachine(["Tea", "Extra", "3"]);
