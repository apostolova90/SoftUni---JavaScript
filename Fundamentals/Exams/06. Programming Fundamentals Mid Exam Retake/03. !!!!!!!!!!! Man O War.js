.................




















/* 
Another:


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
    "Retire"]); */