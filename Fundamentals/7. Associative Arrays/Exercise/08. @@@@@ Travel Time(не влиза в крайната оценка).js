//с Иво на упражнения


function travelTime(data) {

    let countries = {};

    for (let line of arr){
        let currentRow = line.split(' > ');
        let country = currentRow[0];
        let city = currentRow[1];
        let price = Number(currentRow[2]);

        // ще използваме вложени обекти

        if (!countries.hasOwnProperty(country)){ //проверяваме дали в обекта го няма country-то
            countries[country] = {}; // ако не съществува го сетваме като ключ, а стойността е празен обект
        }
        if (!countries[country].hasOwnProperty(city)){ //проверяваме дали в обекта го няма city-то
            countries[country][city] = price; // ако не съществува го сетваме отново като ключ (втори) и му добавяме стойност - съответната цена (price)
        }
        if(countries[country][city] > price){ //сравняваме текущата цена която се крие зад countries[country][city], с новата сума и ако цената на пътуването е > от цената която в момента имаме, взимаме по-малката
            countries[country][city] = price
        }
    }

    // първо сортираме по имената 
    let keys = Object.keys(countries); // взимаме си ключовете, които се реално имената на държавите
    keys.sort((a,b) => a.localeCompare(b)); // и ги сортираме по збучен ред

    // после сортираме по сумата
    for (let item of keys){ // и понеже държавите са ключове в countries обекта, минаваме по тях
        let sortedCities = Object.entries(countries[item]); // взимаме стойностите които стоят зад тях 
        sortedCities.sort((a,b) => a[1] - b[1]); // и ги сортираме по възходящ ред по цени

        let result = []; // напълваме всички градове в дадения обект, тъй като градовете може да са повече от един
        for(let city of sortedCities){
            result.push(city.join(' -> '))
        }
        console.log(`${item} -> ${result.join(' ')}`)
    }

}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"])

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'])





    

// с Тошко на упражненията:

/* function travelTime(data){
    let result = {};
 
    for (let line of data){
        let tokens = line.split(" > ");
        let country = tokens[0];
        let town = tokens[1];
        let cost = Number(tokens[2]);
 
        if (!result.hasOwnProperty(country)){
            result[country] = {};
        }
        
        if (!result[country].hasOwnProperty(town)){
            result[country][town] = 0;
        } 
 
        let oldCost = result[country][town];
        if (oldCost > cost || oldCost === 0) {
            result[country][town] = cost;
        }
        
    }
 
    let sortCountry = Object.entries(result).sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    })
 
    for (let [key, townInfo] of sortCountry) {
        let sortTown = Object.entries(townInfo).sort(([keyA, valueA],[keyB, valueB]) => {
            return valueA - valueB
        })
        let buff = `${key} -> `;
        for (let [townName, townCost] of sortTown) {
            buff += `${townName} -> ${townCost} `;
        }
        console.log(buff);
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"])

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'])
 */










// Another 

/* function travelTime(arr) {

    let destinations = {};

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' > ');
        let country = tokens[0];
        let city = tokens[1];
        let price = tokens[2];
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
            destinations[country][city] = Number(price);
        } else {
            if (destinations[country].hasOwnProperty(city)) {
                if (destinations[country][city] > Number(price)) {
                    destinations[country][city] = Number(price);
                }
            } else {
                destinations[country][city] = Number(price);
            }
        }
    }

    let sortedCountries = Object.entries(destinations).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare([keyB]));
    let index = 0;

    for (let country of sortedCountries) {
        let sorted = Object.entries(country[1]).sort(([keyA, valueA], [keyB, valueB]) => country[1][keyA] - country[1][keyB]);
        let citiesArr = [];
        for (let el of sorted) {
            let joined = el.join(' -> ');
            citiesArr.push(joined);
        }
        console.log(`${sortedCountries[index][0]} -> ${citiesArr.join(' ')}`);
        index++;
        citiesArr = [];
    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'])

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10']) */