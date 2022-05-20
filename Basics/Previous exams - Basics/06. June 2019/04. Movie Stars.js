function movieStar(input){

    let movieBudget = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let name = 0;
    let moneyPerActor = 0;
    


    while (command !== "ACTION"){
        
        if (command === "ACTION"){
            break;
        }
        name = command.length

        if (name <= 15){
            moneyPerActor = Number(input[index])
            index++
        }

        if (name > 15){
            moneyPerActor = movieBudget * 0.2
        } 
        movieBudget -= moneyPerActor

        if(movieBudget < 0){
            movieBudget = Math.abs(movieBudget)
            console.log (`We need ${movieBudget.toFixed(2)} leva for our actors.`);
            break;
        }

        command = input[index];
        index++;
        
    }

    if (command === "ACTION"){
        console.log (`We are left with ${movieBudget.toFixed(2)} leva.`)
    }
}
movieStar(["90000","Christian Bale","70000.50","Leonard DiCaprio","Kevin Spacey","24000.99"]);
movieStar(["170000","Ben Affleck","40000.50","Zahari Baharov","80000","Tom Hanks","2000.99","ACTION"]);
movieStar(["600000", "Michael Aniston", "400000", "Pamela Anderson", "200010", "ACTION"]);