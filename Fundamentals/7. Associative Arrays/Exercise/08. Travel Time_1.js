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
