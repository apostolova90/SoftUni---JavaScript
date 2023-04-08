

// Another 


function travelTime(arr) {

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
    'Bulgaria > Lukovit > 10'])