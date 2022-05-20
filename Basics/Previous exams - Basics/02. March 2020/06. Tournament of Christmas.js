function tournamentOfChristmas(input){

    let index = 0;
    let countOfDays = Number(input[index]);
    index++;


    let totalMoney = 0;
    let daysWin = 0;
    let daysLoose = 0;

    for(let i = 1; i <= countOfDays; i++){
        let countsOfWins = 0;
        let countsOfLooses = 0;
        let money = 0;
        let command = input[index];  // command го опеменаваме тук, а не над ФОР
        index++;


        while(command !== "Finish"){
            let gamesName = command;   // а това тук
            let result = input[index]
            index++;

            if (result === "win"){
                money += 20;
                countsOfWins++
            
            } else if (result === "lose"){
                countsOfLooses++
            }


        command = input[index];
        index++

        if (command === "Finish"){
            if (countsOfWins > countsOfLooses){
                daysWin++
                money += money * 0.10;
                totalMoney += money;
            } else {
                daysLoose ++;
                totalMoney += money
            }
        }
    }
}
if(daysWin > daysLoose){
    totalMoney += totalMoney * 0.2;
    console.log(`You won the tournament! Total raised money: ${(totalMoney.toFixed(2))}`)
     } else {
    console.log(`You lost the tournament! Total raised money: ${(totalMoney.toFixed(2))}`)
    }
}
tournamentOfChristmas(["2","volleyball","win","football","lose","basketball","win","Finish","golf","win","tennis","win","badminton","win","Finish"]);

tournamentOfChristmas (["3","darts","lose","handball","lose","judo","win","Finish","snooker","lose","swimming","lose","squash","lose","table tennis","win","Finish","volleyball","win","basketball","win","Finish"]);
