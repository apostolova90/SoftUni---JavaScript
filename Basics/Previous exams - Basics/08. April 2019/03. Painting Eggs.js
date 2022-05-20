function paintingEggs(input) {
    let size = input[0];
    let color = input[1];
    let numberOfGroups = Number(input[2]);
    let pricePerGroup = 0;

if (size === "Large"){
    switch (color){
        case "Red":
        pricePerGroup = 16;
        break;
        case "Green":
        pricePerGroup = 12;
        break;
        case "Yellow":
        pricePerGroup = 9;
        break;
    }
} else if (size === "Medium"){
    switch (color){
        case "Red":
        pricePerGroup = 13;
        break;
        case "Green":
        pricePerGroup = 9;
        break;
        case "Yellow":
        pricePerGroup = 7;
        break;
    }
} else if (size === "Small"){
    switch (color){
        case "Red":
        pricePerGroup = 9;
        break;
        case "Green":
        pricePerGroup = 8;
        break;
        case "Yellow":
        pricePerGroup = 5;
        break;
    }
}

let totalPriceAllGroupsOfEggs = numberOfGroups * pricePerGroup;
let totalProfit = totalPriceAllGroupsOfEggs * 0.65;

console.log (`${totalProfit.toFixed(2)} leva.`)

}
/* paintingEggs(["Large", "Red", "7"]); */
paintingEggs(["Medium", "Green", "5"]);
/* paintingEggs(["Small", "Yellow", "3"]); */
