function puppy(input) {

    let index = 1;
    let foodInKg = Number(input[0]);
    let foodInGrams = foodInKg * 1000;
    let command = input[index];
    index++;
    
    
    while (command !== "Adopted"){
        let foodEaten = Number(command);
        foodInGrams -= foodEaten;


        command = input[index];
        index++;

    }
    if (command === "Adopted"){
        if (foodInGrams >= 0){
            console.log(`Food is enough! Leftovers: ${foodInGrams} grams.`);
            
        } else {
            console.log(`Food is not enough. You need ${Math.abs(foodInGrams)} grams more.`);
        }
        
    }

}
/* puppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
 puppy(["3", "1000", "1000", "1000", "Adopted"]); */
puppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]); 