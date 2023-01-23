function cityRecord(cityName, population, treasury){

    let record = {
        name: cityName,
        population: population,
        treasury: treasury
    }

    return record
}
cityRecord('Tortuga', 7000, 15000);
cityRecord('Santo Domingo', 12000, 23500)




//second way - dynamic

function cityRecord(cityName, population, treasury){

    let record = {};

    record.name = cityName;
    record.population = population;
    record.treasury = treasury;

    return record
}
cityRecord('Tortuga', 7000, 15000);
cityRecord('Santo Domingo', 12000, 23500)




// Third way - shorthand syntax

function cityRecord(name, population, treasury){

let record = { 
    name, 
    population, 
    treasury,
};

    return record
}
cityRecord('Tortuga', 7000, 15000);
cityRecord('Santo Domingo', 12000, 23500)
