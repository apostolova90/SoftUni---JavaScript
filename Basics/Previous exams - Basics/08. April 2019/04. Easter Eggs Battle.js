function eAsterEggBattle(input) {

let startPointsP1 = Number(input[0]);
let startPointsP2 = Number(input[1]);


let index = 2;
let command = input[index];
index++;

while (command !== "End of battle"){

    if (command === "one"){
        startPointsP1 += 0;
        startPointsP2 -= 1;
    } else if (command === "two"){
        startPointsP2 += 0;
        startPointsP1 -= 1;
    }


    if (startPointsP1 === 0){
        console.log(`Player one is out of eggs. Player two has ${startPointsP2} eggs left.`);
        break;
    }

    if (startPointsP2 === 0){
        console.log(`Player two is out of eggs. Player one has ${startPointsP1} eggs left.`)
    break;
    }
command = input[index];
index++

}

if (command === "End of battle"){
    console.log(`Player one has ${startPointsP1} eggs left.`);
    console.log(`Player two has ${startPointsP2} eggs left.`);
    }
}
eAsterEggBattle(["5", "4", "one", "two", "one", "two", "two", "End of battle"]);
eAsterEggBattle(["2", "6", "one", "two", "two"]);
eAsterEggBattle(["6", "3", "one", "two", "two", "one", "one"]);
