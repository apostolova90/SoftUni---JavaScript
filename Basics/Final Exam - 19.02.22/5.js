//ТРУДНА

// повторно решена задача, но с 90/100


function bestPlayer(input) {
  let index = 0;
  let command = input[index];
  index++;

  let bestPlayer = 0;
  let numberOfGoals = 0;

  let maxScore = Number.MIN_SAFE_INTEGER;

  while (command !== "END") {
    numberOfGoals = Number(input[index]);
    index++;

    if (maxScore < numberOfGoals) {
      maxScore = numberOfGoals;
      bestPlayer = command;
    }

    if (numberOfGoals >= 10) {
      break;
    }

    command = input[index];
    index++;
  }

  console.log(`${bestPlayer} is the best player!`);

  if (numberOfGoals >= 3) {
    console.log(
      `He has scored ${maxScore} goals and made a hat-trick !!!`);
  } else {
    console.log(`He has scored ${maxScore} goals.`);
  }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Petrov", "2", "Drogba", "11"]);
bestPlayer(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);


/* function bestPlayer(input) {
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

 */
