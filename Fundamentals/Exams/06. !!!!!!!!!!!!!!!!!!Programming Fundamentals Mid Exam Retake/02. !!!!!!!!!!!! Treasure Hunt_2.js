function treasureHunt(array) {

    let chestContains = array.shift().split("|")

    for (let line of array) {
        let lineInfo = line.split(" ");
        let command = lineInfo.shift();

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
        for (let item of loot){
            let hasItem = chestContains.includes(item);
                if (!hasItem){
                    chestContains.unshift(item)
                }
        }
    }

    function drop(index) {
        /* let currentElem = chestContains[index] */  
        if (chestContains[index] !== undefined) {
            let item = chestContains[index]
            chestContains.splice(index, 1)
            chestContains.push(item)
        }
    }

    function steal(number){
        let startIndex = Math.max(0, chestContains.length - number)
        let stolenItems = chestContains.splice(startIndex, chestContains.length)
        console.log(stolenItems.join(", "))
    }

    function print(chestContains){
        let counter = 0;
        for (let word of chestContains){
            let wordLength = word.length
            counter += wordLength
        }

    let numberOfElements = chestContains.length;
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