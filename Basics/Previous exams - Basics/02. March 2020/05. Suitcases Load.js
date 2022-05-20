function suitcase(input) {

    let index = 1;
    let plainVolume = Number(input[0]);
    let suticaseLoaded = 0;
    let suitcaseCounter = 0;
    let command = input[index];
    index++;

    while (command !== "End"){
        suticaseLoaded = Number(command);
        suitcaseCounter++;

        if(suitcaseCounter % 3 === 0){
            suticaseLoaded *= 1.1;
            
        }

        plainVolume -= suticaseLoaded
        

        if(plainVolume < 0){
            console.log ("No more space!");
            console.log (`Statistic: ${suitcaseCounter - 1} suitcases loaded.`);
            break;
        }
        
        command = input[index];
        index++
    }
    if (command === "End"){
        console.log ("Congratulations! All suitcases are loaded!");
        console.log (`Statistic: ${suitcaseCounter} suitcases loaded.`);
    }

}
suitcase(["550", "100", "252", "72", "End"]);
suitcase(["700.5", "180", "340.6", "126", "220"]);
suitcase(["1200.2", "260", "380.5", "125.6", "305", "End"]);
