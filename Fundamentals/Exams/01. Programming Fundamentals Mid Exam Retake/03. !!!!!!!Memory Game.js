.....................85/100



function memoryGame(array) {
 
    let workingArray = array.shift().split(" ");
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
 
        if ((value1 < 0 || value2 < 0) || (value1 === value2)){
            workingArray.splice(workingArray.length / 2 , 0, `-${turnsCounter}a`, `-${turnsCounter}a`); // намира средата на масива и добавя два елемента.
            elementsCounter += 2
            console.log("Invalid input! Adding additional elements to the board")
        } else {
                if (value1OfWorkingArray === value2OfWorkingArray){
                console.log (`Congrats! You have found matching elements - ${workingArray[value1]}!`)
                    
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
/* memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]); */
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
/* memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);  */


/* 
ДРУГ


function memoryGame(input) {
    let arr = input.shift().split(' ');

    let countMoves = 0;
    let allMatchingElements = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'end') {
            break;
        }
        let currentIndexes = input[i].split(' ');

        let firstIndex = currentIndexes[0];
        let secondIndex = currentIndexes[1];
        let isTheFirstIndexValid = isItInBounds(firstIndex);
        let isTheSecondIndexValid = isItInBounds(secondIndex);
        if (firstIndex === secondIndex || !isTheFirstIndexValid || !isTheSecondIndexValid) {
            countMoves++;
            let middleIndexOfArr = middleOfTheArr(arr);
            let charToInsertInArr = `-${countMoves}a`;
            arr.splice(middleIndexOfArr, 0, charToInsertInArr, charToInsertInArr);
            console.log(`Invalid input! Adding additional elements to the board`);
 
        } else {
            if (arr[firstIndex] === arr[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${arr[firstIndex]}!`);

                let elementOfSecondIndex = arr[secondIndex];
                arr.splice(firstIndex, 1);
                let newIndexOfElement = arr.indexOf(elementOfSecondIndex);
                arr.splice(newIndexOfElement,1);
                
                allMatchingElements++;
                countMoves++;
                if (arr.length === 0){
                    break;

                }
            } else if (arr[firstIndex] !== arr[secondIndex]) {
                console.log(`Try again!`);
            }
        }
 
    }
    
    
    
    
    if (allMatchingElements === input.length - 1 || arr.length === 0) {
        console.log(`You have won in ${countMoves} turns!`);
    } else {
        console.log(`Sorry you lose :(\n${arr.join(' ')}`);
    }






    function isItInBounds(index) {
        if (index >= 0 && index < arr.length) {
            return true;
        } else {
            return false;
        }
    }




    function middleOfTheArr(arr) {
        let theMiddleIndex = Math.floor(arr.length / 2);
        return theMiddleIndex;
        
    }
 
} */