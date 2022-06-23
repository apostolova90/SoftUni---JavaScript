

/* Решена с Иво и колегите в подготовка за изпита: */

function heartDelivery(arr) {
 
    let firstLine = arr.shift().split("@");
    let nextLine = arr.shift();
    let total = 0;
 
    while (nextLine !== 'Love!') {
        let result = nextLine.split(' ');
        total += Number(result[1]);
 
        if (total > firstLine.length - 1) {
            total = 0;
        }
 
        if (firstLine[total] === 0) {
            console.log(`Place ${total} already had Valentine's day.`);
        } else {
            firstLine[total] = firstLine[total] - 2;
            if (firstLine[total] === 0) {
                console.log(`Place ${total} has Valentine's day.`);
            }
        }
        nextLine = arr.shift();
    }
    console.log(`Cupid's last position was ${total}.`);
    let resultArr = [];
    let resultFlag = true;
 
    firstLine.forEach(element => {
        if (element !== 0) {
            resultFlag = false;
            resultArr.push(element);
        }
    });
    if (resultFlag) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${resultArr.length} places.`);
    }
}
heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
heartDelivery([  "2@4@2",  "Jump 2",  "Jump 2",  "Jump 8",  "Jump 3",  "Jump 1",  "Love!",]);
















/* Another one: 

function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let currentHousePosition = 0;
    let successfulHouses = 0;
    let command = input.shift();

    while (command != 'Love!') {
        let jumps = command.split(' ');
        currentHousePosition += Number(jumps[1]);

        if (currentHousePosition > neighborhood.length - 1) {
            currentHousePosition = 0;
        }

        if (neighborhood[currentHousePosition] == 0) {
            console.log(`Place ${currentHousePosition} already had Valentine's day.`);
            command = input.shift();
            continue;
        }

        neighborhood[currentHousePosition] -= 2;

        if (neighborhood[currentHousePosition] == 0) {
            successfulHouses++;
            console.log(`Place ${currentHousePosition} has Valentine's day.`);
        }

        command = input.shift();
    }

    console.log(`Cupid's last position was ${currentHousePosition}.`);

    if (successfulHouses == neighborhood.length) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${neighborhood.length - successfulHouses} places.`);
    }
}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);
 */
