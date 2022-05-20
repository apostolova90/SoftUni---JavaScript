function tennisRanklist(input) {

    let numberOfTournaments = Number(input[0]);
    let startingPoints = Number(input[1]);
    let index = 2;
    let outcome = 0;
    let tempPoints = 0;
    let totalPoints = 0;
    let avgPoints = 0;
    let w = 0;
    

    for (let i = 1; i <= numberOfTournaments; i++){

        outcome = input[index];
        index++;

        if (outcome === "SF"){
            tempPoints = 720
        } else if ( outcome === "F"){
            tempPoints = 1200
        } else {
            tempPoints = 2000
            w++
        }

        totalPoints += tempPoints

    }

    
    avgPoints = Math.floor(totalPoints / numberOfTournaments);
    let winsPercentage = w / numberOfTournaments * 100;
    totalPoints += startingPoints

    console.log(`Final points: ${totalPoints}`);

    console.log(`Average points: ${avgPoints}`)
    console.log(`${winsPercentage.toFixed(2)}%`);

}
tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);
/* tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);
 */