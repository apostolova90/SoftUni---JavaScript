

/* мое решение */

function memoryGame(array) {
 
    let workingArray = array.shift().split(" "); //отделяме първата част на масива
    let turnsCounter = 0;
    command = 0;
    let elementsCounter = workingArray.length;
    let isWon = true;
 
    for (i = 0; i < array.length; i++){
        command = array[i]
        if (elementsCounter === 0){
            isWon = true;
            break;
        }
        turnsCounter++;
        
        if (command === "end"){
            isWon = false;
            console.log("Sorry you lose :(")
            console.log(`${workingArray.join (" ")}`)
            break;
        } 
        let tempIndex = command.split(" ").map(Number);
        let value1 = tempIndex[0];
        let value2 = tempIndex[1];
        let value1OfWorkingArray = workingArray[value1];
        let value2OfWorkingArray = workingArray[value2];
 
        

        if (value1 == value2 || (value1 || value2) > workingArray.length - 1 || (value1 || value2) < 0){ //всички еща, на които ако не отговаря трябва да приключи
            workingArray.splice(workingArray.length / 2 , 0, `-${turnsCounter}a`, `-${turnsCounter}a`); // намира средата на масива и добавя два елемента.
            elementsCounter += 2
            console.log("Invalid input! Adding additional elements to the board")
        } else {
                if (value1OfWorkingArray === value2OfWorkingArray){
                console.log (`Congrats! You have found matching elements - ${workingArray[value1]}!`)
                    
                //маха двата еднакви елемента от масива:
                let elementOfSecondIndex = workingArray[value2];
                workingArray.splice(value1, 1);
                let newIndexOfElement = workingArray.indexOf(elementOfSecondIndex);
                workingArray.splice(newIndexOfElement, 1);
                elementsCounter -= 2;
 
                
                    
            } else if (value1OfWorkingArray !== value2OfWorkingArray) {
                console.log("Try again!")
            }
        }
        
    }
 
 
    if(isWon){
        console.log(`You have won in ${turnsCounter} turns!`)
    }
    
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
console.log("_____________")
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
console.log("_____________")
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
console.log("_____________")
memoryGame(["1 d 5 5 d 1", "0 5", "0 4", "0 3", "0 2", "0 1", "end"]);  





/* Another


function memoryGame(input) {
  let sequence = input.shift().split(" ");
  let index = 0;
  let command = input[index++];
  let moves = 0;

  while (command != "end") {
    let positions = command.split(" ").map(Number);
    let positionOne = positions[0];
    let positionTwo = positions[1];

    moves++;

    if (
      positionOne == positionTwo ||
      (positionOne || positionTwo) > sequence.length - 1 ||
      (positionOne || positionTwo) < 0
    ) {
      console.log("Invalid input! Adding additional elements to the board");
      sequence.splice(sequence.length / 2, 0, `-${moves}a`, `-${moves}a`); // намира средата на масива и добавя два елемента.
      command = input[index++];
      continue;
    }

    if (sequence[positionOne] != sequence[positionTwo]) {
      console.log("Try again!");
    } else {
      console.log(
        `Congrats! You have found matching elements - ${sequence[positionOne]}!`
      );
      sequence.splice(Math.max(positionOne, positionTwo), 1); //маха първата позиция
      sequence.splice(Math.min(positionOne, positionTwo), 1); //маха втората позиция
    }

    if (sequence.length == 0) {
      console.log(`You have won in ${moves} turns!`);
      break;
    }
    command = input[index++];
  }
  if (sequence.length > 0) {
    console.log(`Sorry you lose :(\n${sequence.join(" ")}`);
  }
}
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]); */








/* Another:

function memoryGame(input) {
 
    let board = input.shift().split(' ');
    let command = input.shift();
    let turns = 1;
 
    while(command !== 'end' && board.length > 0){ 
 
        let [first, second] = command.split(' ').map(Number) // 
 
 
        let isinvalidInput = (first < 0 || first >= board.length) || (second < 0 || second >= board.length) || first === second
        if (isinvalidInput) { // when players tries to cheat
            console.log("Invalid input! Adding additional elements to the board");
            let middleIndex = Math.floor(board.length / 2);
            let elementToAdd = `-${turns}a`;
            board.splice(middleIndex, 0, elementToAdd, elementToAdd);
        } else { 
            if(board[first] === board[second]){
                console.log(`Congrats! You have found matching elements - ${board[first]}!`);
                board = board.filter((e) => e!==board[first]);
            } else {
                console.log("Try again!");
            }
        }
    
 
    if(board.length === 0){
        console.log(`You have won in ${turns} turns!`);
        break;
    }
    command = input.shift();
    turns++;
}
if (board.length > 0){
    console.log(`Sorry you lose :(\n${board.join(' ')}`);
    
}
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]); */












