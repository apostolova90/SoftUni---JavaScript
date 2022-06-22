
function manOWar(arr) {

    let pirateShipStatus = arr.shift().split('>').map(Number);
    let warShipStatus = arr.shift().split('>').map(Number);
    let maxHealthOfASection = Number(arr.shift());
    let command = arr.shift();
    let isSunken = false;

    while (command != 'Retire') {

        if (command == 'Status') {
            let sectionToRepair = pirateShipStatus.filter(s => s < maxHealthOfASection * 0.20);
            let count = sectionToRepair.length;
            console.log(`${count} sections need repair.`);
        } else {
            commandAsArr = command.split(' ');
            let operation = commandAsArr.shift();

            if (operation == 'Fire') {
                let index = Number(commandAsArr[0]);
                let damage = Number(commandAsArr[1]);

                if (index >= 0 && index < warShipStatus.length) {
                    warShipStatus[index] -= damage;
                }

                if (warShipStatus[index] <= 0) {
                    isSunken = true;
                    console.log('You won! The enemy ship has sunken.');
                    break;
                }

            } else if (operation == 'Defend') {
                let startIndex = Number(commandAsArr[0]);
                let endIndex = Number(commandAsArr[1]);
                let damage = Number(commandAsArr[2]);

                if ((startIndex >= 0 && startIndex < pirateShipStatus.length) &&
                    (endIndex >= 0 && endIndex < pirateShipStatus.length)) {
                    for (let i = startIndex; i <= endIndex; i++) {
                        pirateShipStatus[i] -= damage;

                        if (pirateShipStatus[i] <= 0) {
                            isSunken = true;
                            console.log('You lost! The pirate ship has sunken.');
                            break;
                        }
                    }
                }

            } else if (operation == 'Repair') {
                let index = Number(commandAsArr[0]);
                let health = Number(commandAsArr[1]);

                if (index >= 0 && index < pirateShipStatus.length) {
                    pirateShipStatus[index] += health;
                    if (pirateShipStatus[index] > maxHealthOfASection) {
                        pirateShipStatus[index] = maxHealthOfASection;
                    }
                }
            }
        }

        command = arr.shift();
    }

    if (!isSunken) {
        let sumOfPirateShipSections = pirateShipStatus.reduce((a, b) => a + b, 0);
        let sumOfWarShipSections = warShipStatus.reduce((a, b) => a + b, 0);
        console.log(`Pirate ship status: ${sumOfPirateShipSections}\nWarship status: ${sumOfWarShipSections}`);
    }
}
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]);





/* 
решена с Тошко (подготовка за изпит)

function manOWar(input){
    let statusPirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());
 
    let index = 0;
    let line = input[index];
    index++;
    while(line !== "Retire"){
        let tokens = line.split(" ");
        let i;
 
        switch(tokens[0]){
            case "Fire": 
                i = Number(tokens[1]);
                let damage = Number(tokens[2]);
                if (i < 0 || i > warShip.length - 1) {
                    line = input[index];
                    index++;
                    continue;
                }
                warShip[i] -= damage;
                if (warShip[i] <= 0) {
                    return `You won! The enemy ship has sunken.`;
                }
                break;
            case "Defend": 
                i = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                let dmg = Number(tokens[3])
 
                
                if (i < 0 || i > statusPirateShip.length - 1 || endIndex < 0 || endIndex > statusPirateShip.length - 1){
                    line = input[index];
                    index++
                    continue;
                }
                for(let x = i; x <= endIndex; x++){
                    statusPirateShip[x] = statusPirateShip[x] - dmg;
                    if (statusPirateShip[x] <= 0) {
                        return "You lost! The pirate ship has sunken.";
                    }
                }
                break;
            case "Repair":
                i = Number(tokens[1]);
                let health = Number(tokens[2]);
                if (i < 0 || i > statusPirateShip.length - 1) {
                    line = input[index];
                    index++;
                    continue;
                }
                if (statusPirateShip[i] + health <= maxHealth) {
                    statusPirateShip[i] = statusPirateShip[i] + health
                } else {
                    statusPirateShip[i] = maxHealth;
                }
                break;
            case "Status": 
                let breakPoint = maxHealth * 0.20;
                let result = statusPirateShip.filter(el=> el < breakPoint)
                console.log(result.length + " sections need repair.")
                break;
        }
 
        line = input[index];
        index++;
    }
 
    let warShipResult = 0;
    let pirateShipResult = 0;
    for(let sections of warShip){
        warShipResult += sections;
    }
    for(let section of statusPirateShip){
        pirateShipResult += section
    }
    
       return `Pirate ship status: ${pirateShipResult}\nWarship status: ${warShipResult}`
    
    
}
 
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"]);

manOWar(["2>3>4>5>2",
"6>7>8>9>10>11",
"20",
"Status",
"Fire 2 3",
"Defend 0 4 11",
"Repair 3 18",
"Retire"]);
 
резултата тук нещо не е пълен, н иначе Judge го приема със 100
 */