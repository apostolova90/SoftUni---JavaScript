function easterDecoration (input) {

    let index = 1;
    let customers = Number(input[0]);
    let basketPrice = 1.5;
    let wreathPrice = 3.8;
    let bunnyPrice = 7;
    let itemCounter = 0;
    let averageCost = 0;
    let tempMoney = 0;
    let totalMoney = 0;
    let command = 0;

    for (let i = 0; i < customers; i++){

        command = input[index];
        index ++
        
        tempMoney = 0;
        itemCounter = 0;

        while (command !== 'Finish'){
            switch (command){
            case 'basket' : tempMoney += basketPrice; itemCounter++; break;
            case 'wreath' : tempMoney += wreathPrice; itemCounter++;break;
            case 'chocolate bunny' : tempMoney += bunnyPrice; itemCounter++;break;

            }

            

            command = input[index];
            index ++
        }

        if (itemCounter % 2 === 0) {
            tempMoney *= 0.8;
        }
        
        totalMoney += tempMoney
        
    
        console.log(`You purchased ${itemCounter} items for ${tempMoney.toFixed(2)} leva.`)
        

    }

    averageCost = totalMoney / customers

    console.log(`Average bill per client is: ${averageCost.toFixed(2)} leva.`)


}
easterDecoration(["2","basket","wreath","chocolate bunny","Finish","wreath","chocolate bunny","Finish"]);
easterDecoration(["1","basket","wreath","chocolate bunny","wreath","basket","chocolate bunny","Finish"]);