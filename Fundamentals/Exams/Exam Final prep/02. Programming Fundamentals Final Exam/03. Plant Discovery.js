
// АЗ


function plantDiscovery(arr) {

    let plantColection = {};

    let num = Number(arr.shift()); //въртам през първите n елемнета, за да им запиша данните в обекта:

    for (let i = 0; i < num; i++){

    let tokens = arr.shift().split("<->")
        let plant = tokens[0];
        let rarity = Number(tokens[1])

        if (!plantColection.hasOwnProperty(plant)) {
            plantColection[plant] = [];
            plantColection[plant].push(rarity);
        } else {
            plantColection[plant][0] = rarity;
        }
    }


    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i] === "Exhibition"){
            break;
        }

        let lineInfo = arr[i].split(": ");
        let command = lineInfo[0];
        let splitted = lineInfo[1].split(' - ');

        if (command === "Rate") {
            let plant = splitted[0];
            let rating = Number(splitted[1]);
            if (!plantColection.hasOwnProperty(plant)) { // проверяваме дали растението го НЯМА в глявния масив
                console.log("error"); //ако го няма, принтираме това
            } else {
                plantColection[plant].push(rating); // ако го ИМА добавяме рейтинга в главния обект ------- от това [7], става това - [7, 10]
                }

        } else if (command === "Update"){
            let plant = splitted[0];
            let rarity = Number(splitted[1]);
            if (!plantColection.hasOwnProperty(plant)) { // проверяваме дали растението го НЯМА в глявния масив
                console.log("error"); //ако го няма, принтираме това
            } else {
                plantColection[plant][0] = rarity;// ако го ИМА, подменяме стойността ------- от това [7], става това - [5]
            }

        } else if (command === "Reset"){
            let plant = splitted[0];
            if (!plantColection.hasOwnProperty(plant)) { // проверяваме дали растението го НЯМА в глявния масив
                console.log("error"); //ако го няма, принтираме това
            } else {
                plantColection[plant].splice(1, plantColection[plant].length - 1); // ако го ИМА, махаме всички рейтинги
            }
        }
    }

    console.log("Plants for the exhibition:");


   for (let key of Object.keys(plantColection)) { //минаваме през всички ключове в обекта (['Arnoldii', 'Woodii', 'Welwitschia']):

        let totalRating = 0;
        let count = 0;

        for (let i = 1; i < plantColection[key].length; i++) { // минаваме през всеки елемент в настойността към все ключ
                                                               // [4]
                                                               // [5, 10, 5]
                                                               // [2, 7]
            totalRating += plantColection[key][i]; // и на всяко завъртане, смятаме общия сбор
            count++;       // както и броя на оценките
        }

        let averageRating = totalRating / count;
        if (plantColection[key].length === 1) { // ако имаме само една оценка, то рейтинга трябва да е 0
            console.log(`- ${key}; Rarity: ${plantColection[key][0]}; Rating: 0.00`);
        } else { // ако оценките са повече от една, принтираме сметнатия everageRating
            console.log(`- ${key}; Rarity: ${plantColection[key][0]}; Rating: ${averageRating.toFixed(2)}`);
        }
    }

}
plantDiscovery([
"3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);

/* plantDiscovery([
"2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])
 */





/* function plantDiscovery(arr) {

    let num = Number(arr.shift());
    let plants = {};

    for (let i = 0; i < num; i++) {
        let splited = arr.shift().split('<->');
        let plant = splited[0];
        let rarity = Number(splited[1]);
        if (!plants.hasOwnProperty(plant)) {
            plants[plant] = [];
            plants[plant].push(rarity);
        } else {
            plants[plant][0] = rarity;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Exhibition") {
            break;
        }
        let splited = arr[i].split(': ');
        let command = splited[0];
        let tokens = splited[1].split(' - ');

        if (command === "Rate") {
            let plant = tokens[0];
            let rating = Number(tokens[1]);
            if (!plants.hasOwnProperty(plant)) {
                console.log("error");
            } else {
                plants[plant].push(rating);
            }

        } else if (command === "Update") {
            let plant = tokens[0];
            let rarity = Number(tokens[1]);
            if (!plants.hasOwnProperty(plant)) {
                console.log("error");
            } else {
                plants[plant][0] = rarity;
            }

        } else if (command === "Reset") {
            let plant = tokens[0];
            if (!plants.hasOwnProperty(plant)) {
                console.log("error");
            } else {
                plants[plant].splice(1, plants[plant].length - 1);
            }
        }
    }

    console.log("Plants for the exhibition:");

    for (let key of Object.keys(plants)) {
        let totalRating = 0;
        let count = 0;
        for (let i = 1; i < plants[key].length; i++) {
            totalRating += plants[key][i];
            count++;
        }
        let averageRating = totalRating / count;
        if (plants[key].length === 1) {
            console.log(`- ${key}; Rarity: ${plants[key][0]}; Rating: 0.00`);
        } else {
            console.log(`- ${key}; Rarity: ${plants[key][0]}; Rating: ${averageRating.toFixed(2)}`);
        }
    }
}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]) */