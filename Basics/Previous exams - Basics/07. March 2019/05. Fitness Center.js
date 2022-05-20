function fitnesCenter(input){
    let fitnessCapasity = Number(input[0]);
    let index = 1;

    let Back = 0;
    let Chest = 0;
    let Legs = 0;
    let Abs = 0;
    let totalPeopleTrain = 0;

    let proteinShake = 0;
    let proteinBar = 0;
    let totalPeopleWhoBuy = 0;

    let command = 0;

    for(let i = 0; i <= fitnessCapasity; i++){
        command = input[index];
        index++

        if (command === "Back"){
            Back++;
            totalPeopleTrain++;
        } else if (command === "Chest"){
            Chest++;
            totalPeopleTrain++;
        } else if (command === "Legs"){
            Legs++;
            totalPeopleTrain++;
        } else if (command === "Abs"){
            Abs++;
            totalPeopleTrain++;
        } else if (command === "Protein shake"){
            proteinShake++;
            totalPeopleWhoBuy++;
        } else if (command === "Protein bar"){
            proteinBar++;
            totalPeopleWhoBuy++;
 
        }
        
    
    }

    let persentageOfTrainingPeople = totalPeopleTrain / fitnessCapasity * 100;
    let persentageOfBuyingPeople = totalPeopleWhoBuy / fitnessCapasity * 100;
    

console.log(`${Back} - back`);
console.log(`${Chest} - chest`);
console.log(`${Legs} - legs`);
console.log(`${Abs} - abs`);
console.log(`${proteinShake} - protein shake`);
console.log(`${proteinBar} - protein bar`);
console.log(`${persentageOfTrainingPeople.toFixed(2)}% - work out`);
console.log(`${persentageOfBuyingPeople.toFixed(2)}% - protein`);

}
fitnesCenter(["10","Back","Chest","Legs","Abs","Protein shake","Protein bar","Protein shake","Protein bar","Legs","Abs"]);
fitnesCenter(["7","Chest","Back","Legs","Legs","Abs","Protein shake","Protein bar"]);
