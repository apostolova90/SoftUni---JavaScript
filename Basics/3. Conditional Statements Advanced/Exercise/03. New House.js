function newHome(input) {

const priceOfRoses = 5;
const priceOfDahlias = 3.8;
const priceOfTulips = 2.8;
const priceOfNarcissus = 3;
const priceOfGladiolus = 2.5;

const flowerType = input[0];
const countOfFlowers = Number(input[1]);
const budget = Number(input[2]);

let finalPrice = 0;

switch (flowerType) {
case "Roses":
    if (countOfFlowers > 80) {
        finalPrice -= countOfFlowers * priceOfRoses * 0.1
    } 
    finalPrice += countOfFlowers * priceOfRoses 
break;

case "Dahlias":
    if (countOfFlowers > 90) {
        finalPrice -= countOfFlowers * priceOfDahlias * 0.15
    } 
    finalPrice += countOfFlowers * priceOfDahlias 
break;

case "Tulips":
    if (countOfFlowers > 80) {
        finalPrice -= countOfFlowers * priceOfTulips * 0.15
    } 
    finalPrice += countOfFlowers * priceOfTulips 
break;


case "Narcissus":
    if (countOfFlowers < 120) {
        finalPrice += countOfFlowers * priceOfNarcissus * 0.15
    } finalPrice += countOfFlowers * priceOfNarcissus
break;

case "Gladiolus":
    if (countOfFlowers < 80) {
        finalPrice += countOfFlowers * priceOfGladiolus * 0.20
    } 
    finalPrice += countOfFlowers * priceOfGladiolus
break;
}

let difference = Math.abs(finalPrice - budget);

if (finalPrice <= budget) {
    console.log(`Hey, you have a great garden with ${countOfFlowers} ${flowerType} and ${difference.toFixed(2)} leva left.`)
} else if (finalPrice > budget) {
    console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`)

    }
}
newHome (["Roses",
"85",
"250"]);

