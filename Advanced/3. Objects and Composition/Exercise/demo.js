// създаване на обект
let doubleChoko = {
    flourType: 'brown',
    bonus: 'fruit',
    weight: 100,
};


// достъпване на обект
console.log(doubleChoko.bonus);   // fruit
console.log(doubleChoko[`bonus`]);  // fruit


// променяне на стойност към ключ
doubleChoko.flourType = 'white';
console.log(doubleChoko.flourType);


// добавяне на нов ключ + стойност
doubleChoko.count = 5
// или doubleChoko['count'] = 5


// изтриване на ключ + стойност
delete doubleChoko.weight;


// Копиране на обект - дълбоко копиране на обект
let copy = JSON.parse(JSON.stringify(doubleChoko));
doubleChoko.bonus = 'none';
console.log(copy);


//итериране по обект 
    for (let el in doubleChoko) { 
        console.log(el) // ключовете 
        console.log(doubleChoko[el]); // стойностите
    }


// методи, с които да взимаме ключове или спйности от обекта
    let keys = Object.keys(doubleChoko) // ключове като масив
    console.log(keys) // ['flourType', 'bonus', 'count']

    let values = Object.values(doubleChoko) // стойнсотите като масив
    console.log(values) // ['white', 'none', 5]

    let entries = Object.entries(doubleChoko) // двойка ключ + стойност като масив от масиви
    console.log(entries) // [Array(2), Array(2), Array(2)]
    console.log(entries[0][0]) // flourType     ------   първата [0] показва в кой масив искаме да влезем, втората [0] се грижи да вземем данните във вложения масив 



// This   ---- "this е контекста, в който се намира"  ---- за да свържем дадени данни, които имаме в дадения обект
    let car = {
        brand: 'Mercedes-Benz',
        model: 'S-500',
        age: 5,
        maxSpeed: 300,
        horsePowers: 300,
        move: function(){ 
            return this.maxSpeed * this.horsePowers;
        }
    }
    console.log(car.move())