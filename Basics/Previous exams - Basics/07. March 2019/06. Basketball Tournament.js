function basketballTournament(input) {

    let index = 0;
    let tournamentName = input[index];
    index++;
    let numberOfGames = 0;
    let scoreHome = 0;
    let scoreAway = 0;

    let allGamesPlayed = 0;
    let gameCounter = 0;
    let winsCounter = 0;
    let lossCounter = 0;
    let pointDiff = 0;

    while (tournamentName !== "End of tournaments"){
        let command = tournamentName;
        
        numberOfGames = input[index];
        index++;
        

        for(let i = 0; i < numberOfGames; i++){
            scoreHome = input[index];
            index++;
            scoreAway = input[index];
            
            
            
            gameCounter++;
            allGamesPlayed ++;

                if (scoreHome > scoreAway){
                    winsCounter++;
                    pointDiff = scoreHome - scoreAway;
                    console.log(`Game ${gameCounter} of tournament ${tournamentName}: win with ${pointDiff} points.`)
                } else if (scoreAway > scoreHome) {
                    lossCounter++;
                    pointDiff = scoreAway - scoreHome;
                    console.log(`Game ${gameCounter} of tournament ${tournamentName}: lost with ${pointDiff} points.`)
                }

            command = input[index];
            index++;
        }
        
        
        gameCounter = 0;
        tournamentName = input[index];
        index++
    }
    let homeWinPercentage = winsCounter / allGamesPlayed * 100;
    let awayWinPercentage = lossCounter / allGamesPlayed * 100;

console.log(`${homeWinPercentage.toFixed(2)}% matches win`);
console.log(`${awayWinPercentage.toFixed(2)}% matches lost`)
    
}
basketballTournament(["Dunkers","2","75","65","56","73","Fire Girls","3","67","34","83","98","66","45","End of tournaments"]);