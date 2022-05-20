function bestPlayer(input) {
    let index = 0;
    let command = input[index];

    let maxScore = Number.MIN_SAFE_INTEGER;
    let score = 0;
    let hatTrick = 0;
    let playerName = "";
    let bestPlayer = "";

while (command !== "END"){

    playerName = input[index];
    index++;
    score = Number(input[index]);

    if(maxScore < score){
        maxScore = score;
        bestPlayer = playerName;
        if (score >= 3){
            hatTrick = score;
    }
}

if (hatTrick >= 10) {
break;
}
    index++;
    command = input[index];
}

console.log(`${bestPlayer} is the best player!`);

if (hatTrick >= 3) {
    console.log(`He has scored ${hatTrick} goals and made a hat-trick !!!`);
  
} else {
    console.log(`He has scored ${score} goals.`);
  }
}

bestPlayer(["Neymar","2","Ronaldo","1","Messi","3","END"]);
bestPlayer(["Silva","5","Harry Kane","10"]);
bestPlayer(["Petrov","2","Drogba","11"]);

