function numbersWar(input) {

    let player1 = input[0];
    let player2 = input[1];
    let index = 2;
    let card1 = 0;
    let card2 = 0;
    let command = input[index];
    index++;
    let p1Score = 0;
    let p2Score = 0;

    while (command !== "End of game"){
        card1 = Number(command);
        command = input[index];
        index++
        card2 = Number(command);

        if (card1 === card2){
            command = input[index];
            index++
            card1 = Number(command);
            command = input[index];
            index++
            card2 = Number(command);
   
            if (card1 > card2){ 
                console.log("Number wars!");
                console.log(`${player1} is winner with ${p1Score} points`)
                break;
            } else {     
                console.log("Number wars!");
                console.log(`${player2} is winner with ${p2Score} points`)
                break;
            }
        }

        if (card1 > card2){
            p1Score += card1 - card2;
        } else if (card2 > card1){
            p2Score += card2 - card1
        } 
        
        
        
        command = input[index];
        index++
        
    }

    if(command === "End of game"){
    console.log(`${player1} has ${p1Score} points`);
    console.log(`${player2} has ${p2Score} points`);
    }
}
/*  numbersWar(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"]);
 numbersWar(["Elena", "Simeon", "6", "3", "2", "5", "8", "9", "End of game"]); */
numbersWar(["Aleks","Georgi","4","5","3","2","4","3","4","4","5","2"]);