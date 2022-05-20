function darts(input){
    let index = 1;
    let playerName = input[0];
    let command = input[index];
    index++
    let points = 0;
    let score = 301;
    let successfulShots = 0;
    let unsuccessfulShots = 0;
   

    while (command !== "Retire"){
        field = command;
        points = Number(input[index]);
        index++

        if (score === 0){
        console.log(`${playerName} won the leg with ${successfulShots} shots.`)
            break;
        }
        
        switch (field){
            case "Single": points += 0; break;
            case "Double": points *= 2; break;
            case "Triple": points *=3; break;
        }

        score -= points;

       if (score < 0){
           score +=points;
           unsuccessfulShots += 1  
       } else if (score >= 0){
           successfulShots +=1
       }
   

        command = input[index];
        index++
    }

    if (command === "Retire"){
        console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }
}
darts(["Michael van Gerwen","Triple","20","Triple","19","Double","10","Single","3","Single","1","Triple","20","Triple","20","Double","20"]);
darts(["Stephen Bunting","Triple","20","Triple","20","Triple","20","Triple","20","Triple","20","Triple","20","Double","7","Single","12","Double","1","Single","1"]);
darts(["Rob Cross","Triple","20","Triple","20","Triple","20","Triple","20","Double","20","Triple","20","Double","5","Triple","10","Double","6","Retire"]);
