function renovation(input) {
    const aWall = Number(input[0]);
    const hWall = Number(input[1]);
    const numberOfWalls = 4;
    let wallsForPainting = aWall * hWall * numberOfWalls;
    const persentNotToBePaint = Number(input[2]);
    let totalSpaceForPainting = wallsForPainting - (wallsForPainting * persentNotToBePaint / 100);

    let littersOfPaint = 0;
    let paintedWalls = 0;

    let index = 3;
    let command = input[index];
    index++

    while(command !== "Tired!"){

        littersOfPaint = Number(command)

        totalSpaceForPainting -= littersOfPaint;
        paintedWalls += littersOfPaint
        let diff = Math.abs(totalSpaceForPainting - paintedWalls);

if(totalSpaceForPainting === 0){
    console.log(`All walls are painted! Great job, Pesho!`)
    break;
}


if (totalSpaceForPainting < 0){
    console.log(`All walls are painted and you have ${Math.abs(totalSpaceForPainting)} l paint left!`)
break;
}


command = input[index];
index++

}

if(command === "Tired!"){
     console.log(`${totalSpaceForPainting} quadratic m left.`)
}

}
renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2", "3", "25", "6", "7", "8"]);



























/* първо решение */


/* function renovation(input) {

    const aWall = Number(input[0]);
    const hWall = Number(input[1]);
    const numberOfWalls = 4;
    let wallsForPainting = aWall * hWall * numberOfWalls;

    const persentNotToBePaint = Number(input[2]);
    let totalSpaceForPainting = wallsForPainting - (wallsForPainting * persentNotToBePaint / 100);
    let totalLittersUsed = 0;

    index = 3;
    command = input[index];
    index++;

    while (command !== "Tired!") {
        let litters = Number(command);
        totalSpaceForPainting -= litters;
        totalLittersUsed += litters;
        
        if(totalSpaceForPainting === 0){
            console.log(`All walls are painted! Great job, Pesho!`)
            break;
        }
        if (totalSpaceForPainting < 0) {
            console.log(`All walls are painted and you have ${Math.abs(totalSpaceForPainting)} l paint left!`);
            break;
        } 
        
        command = input[index];
        index++
    }

    if (command === "Tired!") {
        console.log(`${totalSpaceForPainting} quadratic m left.`)
    }
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
renovation(["2", "3", "25", "6", "7", "8"]); */
