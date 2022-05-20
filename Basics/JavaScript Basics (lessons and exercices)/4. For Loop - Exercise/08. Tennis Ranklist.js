function tennisRanklist(input) {
    let index = 0;

    let tournamensCount = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++; 
    let tempPoints = 0;
    let winCounter = 0;

    for(let i = 0; i < tournamensCount; i++){
    let score = input[index];
    index++

    
    switch (score){
        case"W": 
        tempPoints += 2000; 
        winCounter ++;
        break;
        case"F": tempPoints += 1200; break;
        case"SF": tempPoints += 720; break;

    }
}
    let finalPoint = tempPoints + startPoints;
    let avgPoints = Math.floor(tempPoints / tournamensCount);
    let winGameP = winCounter / tournamensCount * 100;

    console.log(`Final points: ${finalPoint}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${winGameP.toFixed(2)}%`)
    
}
tennisRanklist(["5","1400","F","SF","W","W","SF"]);