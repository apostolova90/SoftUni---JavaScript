function easterEggs(input) {

    const numberOfPaintedEggs = Number(input[0]);
    index = 1;
    let color = 0;

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;
    let maxScore = Number.MIN_SAFE_INTEGER;
    let maxScoreColor = 0;

    for(let i = 0; i <= numberOfPaintedEggs; i++) {
        color = input[index];
        index++;

        if (color === "red"){
            red++
        } else if (color === "orange"){
            orange++
        } else if (color === "blue"){
            blue++
        } else if (color === "green"){
            green++
        }

        if (maxScore < red){
            maxScore = red;
            maxScoreColor = "red";
        } else {
            maxScore += 0;
        }


        if (maxScore < orange){
            maxScore = orange;
            maxScoreColor = "orange";
        } else {
            maxScore += 0;
        }

        if (maxScore < blue){
            maxScore = blue;
            maxScoreColor = "blue";
        } else {
            maxScore += 0;
        }

        if (maxScore < green){
            maxScore = green;
            maxScoreColor = "green";
        } else {
            maxScore += 0;
        }

    }

    console.log (`Red eggs: ${red}`);
    console.log (`Orange eggs: ${orange}`);
    console.log (`Blue eggs: ${blue}`);
    console.log (`Green eggs: ${green}`);
    console.log (`Max eggs: ${maxScore} -> ${maxScoreColor}`);

}
easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
easterEggs(["4", "blue", "red", "blue", "orange"]); 
