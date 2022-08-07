function fuelTank(input) {
    let type = input[0];
    let litters = Number(input[1]);

    let fuelType = 0

    switch (type){
case "Diesel": fuelType = "diesel"; break;
case "Gasoline": fuelType = "gasoline"; break;
case "Gas": fuelType = "gas"; break;
default: console.log ("Invalid fuel!");
    }

    if (fuelType === "diesel" || fuelType === "gasoline" || fuelType === "gas"){
        if (litters >= 25){
            console.log (`You have enough ${fuelType}.`)
    } else {
        console.log (`Fill your tank with ${fuelType}!`)
        }
    }
}
fuelTank (["Diesel","10"]);