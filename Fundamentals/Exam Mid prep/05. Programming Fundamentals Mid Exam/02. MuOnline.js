function muOnline(input){

    let health = 100;
    let bitcoin = 0;

    let roomCounter = 0;

    let array = input.split("|")
    let isWon = true;

    for (let line of array) { //започваме да въртим

         if (health <= 0){
            break;
        } 
        let lineInfo = line.split(" "); //отделяме първата част на останалия масив, като го правим пак масив
        roomCounter++

        let command = lineInfo[0];
        let value = Number(lineInfo[1]);

        switch (command) {
            case 'potion': 
            potion(lineInfo);
            break;
            case 'chest':
            chest(lineInfo);
            break;
            default:
            monsterPrint(lineInfo);

    }



    function potion(function1) {
        if (health + value >= 100){
            value = 100 - health
            health = 100
            console.log(`You healed for ${value} hp.`)
            console.log(`Current health: ${health} hp.`)
        } else {
            health += value
            console.log(`You healed for ${value} hp.`)
            console.log(`Current health: ${health} hp.`)
        }
    }



    function chest(function2) {

        bitcoin += value
        console.log(`You found ${value} bitcoins.`)
    
    }



    function monsterPrint(function3) {
        if (health - value <= 0){
            health -= value;
            console.log(`You died! Killed by ${command}.`)
            console.log(`Best room: ${roomCounter}`);
            isWon = false;

        } else {
            health -= value
            console.log(`You slayed ${command}.`)
        }
    }

}



if(isWon){
console.log(`You've made it!`)
console.log(`Bitcoins: ${bitcoin}`)
console.log(`Health: ${health}`)
}


}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")



/* 
Another:

function muOnline(roomsAsString) {
    let roomsAsArr = roomsAsString.split('|');
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;
    for (let room of roomsAsArr) {
        room = room.split(' ');
        let command = room[0];
        let number = Number(room[1]);
        roomCounter++;
        let healing;

        if (command == 'potion') {
            if (health + number > 100) {
                healing = 100 - health;
                health = 100;
            } else {
                healing = number;
                health += number;
            }
            console.log(`You healed for ${healing} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command == 'chest') {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            let monster = command;
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomCounter}`);
                break;
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"); */