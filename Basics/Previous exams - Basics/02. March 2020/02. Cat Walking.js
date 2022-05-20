function catWalk(input) {
    const walkDuration = Number(input[0]);
    const numberOfWalks = Number(input[1]);
    const caloriesIntake = Number(input[2]);
    const caloriesPerMinute = 5;
    const caloriesBurned = (walkDuration * caloriesPerMinute) * numberOfWalks;
    const halfCalories = caloriesIntake * 0.5;

    if (caloriesBurned >= halfCalories ){
        console.log (`Yes, the walk for your cat is enough. Burned calories per day: ${caloriesBurned}.`)
    } else {
        console.log (`No, the walk for your cat is not enough. Burned calories per day: ${caloriesBurned}.`)
    }


}
catWalk(["30", "3", "600"]);
catWalk(["15", "2", "500"]);
catWalk(["40", "2", "300"]);