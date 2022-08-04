
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


    for (let i = 0; i < arr.length; i++) { // когато имаме повече от един разделители в инпута
        
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
                plantColection[plant].push(rating); // ако го ИМА добавяме И рейтинга в главния обект ---- така под ключа ще има вече две стоности (rarety и rating)
            }           // на следващото завъртане през командите, ако пак имаме Rate за същото растение, ще добави и новия rating към стария (от 5, ще стане 5,10)


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
            } else {// ако го ИМА, махаме всички рейтинги, като започваме от 1, защото на 0 позиция се намира rarity, а на 1 ratings
                plantColection[plant].splice(1, plantColection[plant].length - 1); // махане на стойност от масив // махане на стойност от обект
            }
        }
    }

    console.log("Plants for the exhibition:");

// въртене през стойностите:
   for (let key of Object.keys(plantColection)) { //минаваме през всички ключове в обекта (['Arnoldii', 'Woodii', 'Welwitschia']):

        let totalRating = 0;
        let count = 0;

        for (let i = 1; i < plantColection[key].length; i++) { // минаваме през всеки елемент в стойността към все ключ, като започваме от 1 (i = 1), защото на 0ва позиция се намира rarety- тo, което има само ч яисло за стойност и и не ни интересува
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

plantDiscovery([
"2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"])








// АЗ

/* function plantDiscovery(arr) {

    let allPlants = {};
    let num = arr.shift();

    for (let i = 0; i < num; i++){
        let tokens = arr.shift().split("<->");
        let plant = tokens[0];
        let rarity = Number(tokens[1]);
        if (!allPlants.hasOwnProperty(plant)){
            allPlants[plant] = [];
            allPlants[plant].push(rarity);
        } else {
            allPlants[plant][0] = rarity;
        }
    }

    for (let i = 0; i < arr.length; i++){
        
        if (arr[i] === "Exhibition"){
            break;
        }

        let lineInfo = arr[i].split(": ");
        let command = lineInfo[0];
        let tokens = lineInfo[1].split(' - ');

        if (command === "Rate"){
            let plant = tokens[0];
            let rating = Number(tokens[1]);
            if (!allPlants.hasOwnProperty(plant)){
                console.log("error")
            } else {
                allPlants[plant].push(rating);
            }
        }

        if (command === "Update"){
            let plant = tokens[0];
            let newRerity = Number(tokens[1]);
            if (!allPlants.hasOwnProperty(plant)){
                console.log("error")
            } else {
                allPlants[plant][0] = newRerity;
            }
        }

        if (command === "Reset"){
            let plant = tokens[0];
            if (!allPlants.hasOwnProperty( plant )){
                console.log("error")
            } else {
                allPlants[plant].splice(1, allPlants[plant].length - 1);
            }   
        }
    }

    console.log("Plants for the exhibition:");

    for (let key of Object.keys(allPlants)) { 

        let totalRating = 0;
        let count = 0;

        for (let i = 1; i < allPlants[key].length; i++) { 
                                                               
            totalRating += allPlants[key][i]; 
            count++;       
        }

        let averageRating = totalRating / count;
        if (allPlants[key].length === 1) { 
            console.log(`- ${key}; Rarity: ${allPlants[key][0]}; Rating: 0.00`);
        } else { 
            console.log(`- ${key}; Rarity: ${allPlants[key][0]}; Rating: ${averageRating.toFixed(2)}`);
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

plantDiscovery([
"2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]) */








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