function treasureHunt(array) {

    let chestContains = array.shift().split("|") //отделяме първата част на масива, в отделна такава

    for (let line of array) { //започваме да въртим, като
        let lineInfo = line.split(" "); //отделяме първата част на останалия масив
        let command = lineInfo.shift(); // и взимаме първата дума от темпорари масива

    switch (command) {
        case 'Loot': 
        loot(lineInfo);
        break;
        case 'Drop': 
        drop(lineInfo);
        break;
        case 'Steal':
        steal(lineInfo);
        break;
        default:
        print(chestContains);

    }


    function loot(loot) { 
        for (let item of loot){ //въртим през елементите и търсим дали дадения елемент присъства
            let hasItem = chestContains.includes(item);
                if (!hasItem){
                    chestContains.unshift(item)// Ако ДА, взимаме елемента и го слагаме в началото на масива. Ако елемента вече присъства, не го добавя.
                }
        }
    }

    function drop(index) { //маха елемента от конкретна позицията (ЧИСЛО) на която се намира и го слагаме най-отзад
        /* let currentElem = chestContains[index] */  
        if (chestContains[index] !== undefined) {
            let item = chestContains[index]
            chestContains.splice(index, 1)
            chestContains.push(item)
        }
    }

    function steal(number){ //Someone steals the last count loot items. If there are fewer items than the given count, remove as much as there are. 
//Print the stolen items separated by ", ":
        let startIndex = Math.max(0, chestContains.length - number) //задаваме стартовата позиция, която е 5 
        let stolenItems = chestContains.splice(startIndex, chestContains.length) // и принтираме останалите, които са откраднати
        console.log(stolenItems.join(", "))
    }

    function print(chestContains){ //при получаване на команда за край
        let counter = 0;
        for (let word of chestContains){
            let wordLength = word.length
            counter += wordLength
        }

    let numberOfElements = chestContains.length; //проверяваме дали замива е празен
        if (numberOfElements > 0){ 
            let averageGain = counter / numberOfElements
            console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`)
        } else {
            console.log("Failed treasure hunt.")
        }
    }

    }

}
   
treasureHunt([
  "Gold|Silver|Bronze|Medallion|Cup",
  "Loot Wood Gold Coins",
  "Loot Silver Pistol",
  "Drop 3",
  "Steal 3",
  "Yohoho!",
]);
treasureHunt([
    "Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!",
  ]);




  /* Another:

  function treasureHunt(arr) {

    let treasureChest = arr.shift().split('|');
    let command = arr.shift();

    while (command != 'Yohoho!') {

        commandAsArr = command.split(' ');
        let operation = commandAsArr.shift();

        if (operation == 'Loot') {
            for (let i = 0; i < commandAsArr.length; i++) {
                let item = commandAsArr[i];
                if (!treasureChest.includes(item)) {
                    treasureChest.unshift(item);
                }

            }
        } else if (operation == 'Drop') {
            let indexToRemove = Number(commandAsArr[0]);
            if (indexToRemove >= 0 && indexToRemove < treasureChest.length) {
                let removed = treasureChest.splice(indexToRemove, 1).join('');
                treasureChest.push(removed);
            }

        } else if (operation == 'Steal') {
            let countToRemove = Number(commandAsArr[0]);
            let stolenItems = treasureChest.splice(-countToRemove);
            console.log(stolenItems.join(', '));
        }
        command = arr.shift();
    }

    if (treasureChest.length < 1) {
        console.log('Failed treasure hunt.');
    } else {
        let sum = 0;
        for (let el of treasureChest) {
            sum += el.length;
        }
        let avgGain = sum / treasureChest.length;
        console.log(`Average treasure gain: ${avgGain.toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]); */