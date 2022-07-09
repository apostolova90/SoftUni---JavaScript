//решена с Иво на упражненията

// с map

function aMinerTask(array){

    let production = new Map();
    let arrLength = array.length;
    for (let i = 0; i < arrLength; i += 2){
        let current = array[i];
        let quantity = Number(array[i + 1]);

        if (!production.has(current)){ // проверяваме дали в обекта го НЯМА този продукт
            production.set(current,0)// ако го няма, го добавяме заедно със стойността, която в случая е 0
        }
        let updatedQuantity = production.get(current) // след взимаме сегашната стойност
        updatedQuantity+=quantity; // добавяме я към старата
        production.set(current, updatedQuantity) // и добавяме стойността към обекта
    }

    for (let item of production){
        console.log(`${item[0]} -> ${item[1]}`);
    }

}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'])



//ДРУГ
// с обект

/* function aMinerTask(array) {
 
    let resources = {};
 
    for (let i = 0; i < array.length; i+=2){
        let resource = array[i];
 
        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = 0
        }
        resources[resource] +=Number(array[i+1])
    }
 
    for (let resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`)
    }
}
 
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']) */