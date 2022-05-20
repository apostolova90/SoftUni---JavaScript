function foodForPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++
    let food = Number(input[index]);
    index++

    let totalDog = 0;
    let totalCat = 0;
    let foodForBoth = 0;
    let biscuits = 0;

for(let i = 1; i <= days; i ++){

    let foodDog = Number(input[index]);
    index++
    totalDog += foodDog

    let foodCat = Number(input[index]);
    index++
    totalCat += foodCat

    foodForBoth += foodDog + foodCat;

    let foodForBothOn3Day = foodDog + foodCat;
    if (i % 3 === 0){
        biscuits += foodForBothOn3Day * 0.10;

    }
}

let percentEatenFoodBoth = foodForBoth / food * 100;
let percentEatenFoodDog = totalDog / foodForBoth * 100;
let percentEatenFoodCat = totalCat / foodForBoth * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${percentEatenFoodBoth.toFixed(2)}% of the food has been eaten.`);
    console.log(`${percentEatenFoodDog.toFixed(2)}% eaten from the dog.`);
    console.log(`${percentEatenFoodCat.toFixed(2)}% eaten from the cat.`);

}   

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
foodForPets(["3","500","100","30","110","25","120","35"]);
