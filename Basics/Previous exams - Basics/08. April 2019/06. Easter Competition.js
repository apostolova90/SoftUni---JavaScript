function easterCompetition (input) {

    let index = 1;
    let entries = Number(input[0]);
    let chef = "";
    let scores = 0;
    let tempPoints = 0;
    
    let bestChef = 0;
    let command = 0;
    let maxScore = Number.MIN_SAFE_INTEGER;
    

    for (let i = 1; i <= entries; i++){
        
        chef = input[index];
        index++
        
        command = input[index];
        index++
        tempPoints = 0;

        while (command !== 'Stop'){
            scores = Number(command);
            tempPoints += scores
            command = input[index];
            index++
           
       }

       console.log (`${chef} has ${tempPoints} points.`)
       
       if(maxScore < tempPoints){
           maxScore = tempPoints;
           bestChef = chef;
           console.log(`${bestChef} is the new number 1!`)
       }
        
    }
    console.log (`${bestChef} won competition with ${maxScore} points!`);
}

easterCompetition(["3","Chef Manchev", "10","10","10","10","Stop","Natalie","8","2","9","Stop","George","9","2","4","2","Stop"]);