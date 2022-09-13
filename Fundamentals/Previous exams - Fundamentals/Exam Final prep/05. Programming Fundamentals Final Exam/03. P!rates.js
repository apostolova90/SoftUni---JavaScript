function pirates(arr) {

    let allCities = {}

    for (let i = 0; i < arr.length; i++) {
        let current = arr.shift()
        if (current === "Sail"){
            break;
        }

        let tokens = current.split("||")
        let name = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (!allCities.hasOwnProperty(name)){
            allCities[name] = [] // създаваме масив към всеки ключ в обекта, като така имаме името на града като ключ и като стойност жителите и златото
            allCities[name].push(population)
            allCities[name].push(gold)
        } else {
            allCities[name][0] += population;
            allCities[name][1] += gold;
        }
}


    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === "End"){
            break;
        }
        let token = arr[j].split("=>");
        let command = token[0]
        let name = token[1];

        if (command === "Plunder"){
            let population = Number(token[2])
            let gold = Number(token[3])
            allCities[name][0] -= population;
            allCities[name][1] -= gold;
            if (allCities[name][0] <= 0 || allCities[name][1] <= 0){
                delete allCities[name];
                console.log(`${name} plundered! ${gold} gold stolen, ${population} citizens killed.`)
                console.log(`${name} has been wiped off the map!`)
            } else {
                console.log(`${name} plundered! ${gold} gold stolen, ${population} citizens killed.`)
            }

        }
        if (command === "Prosper"){
            let goldAdded = Number(token[2]);
            if (goldAdded < 0){
                console.log("Gold added cannot be a negative number!");
            } else {
                allCities[name][1] += goldAdded;
                console.log(`${goldAdded} gold added to the city treasury. ${name} now has ${allCities[name][1]} gold.`)
            }
        }
    }
    
// при поличаване на команда "End", проверяваме дали има останали цели и:

    if (Object.keys(allCities).length > 0){
        console.log(`Ahoy, Captain! There are ${Object.keys(allCities).length} wealthy settlements to go to:`)
        for (let key of Object.keys(allCities)) { // минаваме през всички останали елемeнти в обекта (които не са отпаднали, защото са били превзети)
            let city = key;
            let population = allCities[key][0];
            let gold = allCities[key][1];
            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }


}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]) 

console.log("_______________")

pirates([
"Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]);










//АЗ 

/* function pirates(arr) {

    let allCities = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Sail"){
            break;
        }

        let tokens = arr[i].split("||")
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (!allCities.hasOwnProperty(city)){
            allCities[city] = []
            allCities[city].push(population);
            allCities[city].push(gold);
        } else {
            allCities[city][0] += population
            allCities[city][1] += gold
        }    
    }

    for (let j = 0; j < arr.length; j++){
        if (arr[j] === "End"){
            break;
        }
        let tokens = arr[j].split("=>")
        let command = tokens[0];
        let city = tokens[1];

        if (command === "Plunder"){
            let population = Number(tokens[2]);
            let gold = Number(tokens[3]);
            allCities[city][0] -= population
            allCities[city][1] -= gold
            console.log(`${city} plundered! ${gold} gold stolen, ${population} citizens killed.`)
            if ((allCities[city][0] <= 0) || (allCities[city][1]) <= 0){
                delete allCities[city];
                console.log(`${city} has been wiped off the map!`)
            }
        }

        if (command === "Prosper"){
            let gold = Number(tokens[2]);
            if (gold < 0){
                console.log(`Gold added cannot be a negative number!`)
            } else {
            allCities[city][1] += gold
            console.log(`${gold} gold added to the city treasury. ${city} now has ${allCities[city][1]} gold.`)
            } 
        }
    }
    
    if (Object.keys(allCities).length > 0){
        console.log(`Ahoy, Captain! There are ${Object.keys(allCities).length} wealthy settlements to go to:`)
        for (let key of Object.keys(allCities)) { 
            let city = key;
            let population = allCities[key][0];
            let gold = allCities[key][1];
            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
        } 
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }

}
pirates([
    "Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]) 

console.log("_______________")

pirates([
"Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"]); */







// АЗ


/* function pirates(arr) {

    let cities = {}

    for (let i = 0; i < arr.length; i++){
        let current = arr.shift();

        if (current === "Sail"){
            break;
        }
        let tokens = current.split("||")
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);

        if (!cities.hasOwnProperty(city)){
            cities[city] = [];
            cities[city].push(population);
            cities[city].push(gold);
        } else {
            cities[city][0] += population;
            cities[city][1] += gold;
        }
    }

        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "End"){
                break;
                }

            let tokens = arr[i].split("=>")
            let command = tokens[0];
            let city = tokens[1];

            if (command === "Plunder"){
                let people = Number(tokens[2]);
                let gold = Number(tokens[3]);
                cities[city][0] -= people
                cities[city][1] -= gold
                console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`)
                
                if (cities[city][0] === 0 || cities[city][1] === 0){
                    delete cities[city];
                    console.log(`${city} has been wiped off the map!`)
                }
            
            } else if (command === "Prosper"){
                let gold = Number(tokens[2]);
                if (gold < 0){
                    console.log("Gold added cannot be a negative number!")
                } else {
                    cities[city][1] += gold
                    console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city][1]} gold.`)
                }
            }
        }


// при поличаване на команда "End", проверяваме дали има останали цели и:

    if (Object.keys(cities).length > 0) {   // ако има:
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let key of Object.keys(cities)) { // минаваме през всички останали елемeнти в обекта (които не са отпаднали, защото са били превзети)
            let city = key;
            let population = cities[key][0];
            let gold = cities[key][1];
            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    } else { // ако няма
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }

}
pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End"]); */


/*   pirates([
"Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]) */







// друг

/* function pirates(arr) {

    let cities = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr.shift();
        if (current === "Sail") {
            break;
        }
        let tokens = current.split("||");
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        if (!cities.hasOwnProperty(city)) {
            cities[city] = [];
            cities[city].push(population);
            cities[city].push(gold);
        } else {
            cities[city][0] += population;
            cities[city][1] += gold;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "End") {
            break;
        }
        let tokens = arr[i].split('=>');
        let command = tokens[0];
        let city = tokens[1];
        if (command === "Plunder") {
            let people = Number(tokens[2]);
            let gold = Number(tokens[3]);
            cities[city][0] -= people;
            cities[city][1] -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (cities[city][0] === 0 || cities[city][1] === 0) {
                console.log(`${city} has been wiped off the map!`);
                delete cities[city];
            }
        } else if (command === "Prosper") {
            let gold = Number(tokens[2]);
            if (gold >= 0) {
                cities[city][1] += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city][1]} gold.`);
            } else {
                console.log("Gold added cannot be a negative number!");
            }
        }
    }

    if (Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let key of Object.keys(cities)) {
            let city = key;
            let population = cities[key][0];
            let gold = cities[key][1];
            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]) */
