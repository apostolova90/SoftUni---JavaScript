// Single line object literal:
let otherPerson = { name: 'Pesho', age: 20, isMale: true };



//Multi line object titeral:
let person = {
    name: 'Pesho',
    age: 20,
    isMale: true,
};



// Empty object literal
let cat = {};

cat.age = 5;
cat.name = 'Pesho'; // Dot tonation
cat['fur-color'] = 'yellow'; // Bracket notation - когато в стойността използваме символи като - 
cat.isMale = true;

console.log(cat.name);
console.log(cat[`age`]);



// Destructuring Assingment Syntax
let dog = {
    name: 'Pesho',
    age: 20,
    fur: 'black'
};

let { age, fur } = dog;
console.log(age, fur) // 20 black



// Object as Associative Array

let phones = {
    Ivan: '2645484',
    Georg: '746374',
    Petyr: '5734735'
}
//Accessing 
console.log(phones.Ivan) // 2645484


// Iteration - FOR IN - (въртене през обекта)
for (key in phones){ // така получавам всеки key от обекта
    console.log(key) // взимаме всеки key (Ivan, Georgi, Petyr)
    console.log(phones[key]) // взимаме всяка стойност, към всеки key (2645484, 746374, 5734735)
    console.log(`${key} - ${phones[key]}`) // Ivan - 2645484,  Georg - 746374,  Petyr - 5734735
}

// взимане на стойнсоти в масив използвайки МЕТОДИ
let namesArray = Object.keys(phones);
let phonesArray = Object.values(phones)
let entries = Object.entries(phones);
console.log(namesArray); // ['Ivan', 'Georg', 'Petyr']
console.log(phonesArray) // ['2645484', '746374', '5734735']
console.log(entries); // получаваме масив от масиви, като всеки масив съдържа key + value в себе си


// правене на промени използвайки МЕТОДИ
Object.keys(phones).forEach(x => {    // за всеки елемнт (х) в масива (който в случая е име) взимам неговата стойност (което в случая е номер)
    console.log(`${x} - ${phones[x]}`) // Petyr - 5734735, Georg - 746374, Petyr - 5734735
})




// functions / действия в обектите    (в обектите както свойства, можем да имаме и функции)

function hong() { // функцията може да се зададе извън обекта и след това да се извика в него:
    console.log('Beep beep!')
}
let car = {
    model: 'BMW',
    year: 1000,
    facelift: true,
    hong: hong  // извикваме функцията
}

// функциите на обекта, могат да се създават и вътре в самия обект
let otherCar = {
    model: 'BMW',
    year: 1000,
    facelift: true,
    hong: function() {
        console.log('Beep beep!')
    }
}

car.hong() // принтираме функцията



// Object as library
let calc = {
    sum: function(a,b){
        return a + b;
    },
    multiplication: function(a,b){
        return a * b;
    },
    substraction: function(a,b){
        return a - b;
    },
   
    /* 
    sum: function: (a,b) => a + b,
    multiplication: function: (a,b) => a * b,
    substraction: function: (a,b) => a - b,
    },  
    */
}
console.log(calc.sum(10, 15)) // извикваме първата функция




// object CONTEXT
let car2 = {
    model: 'BMW',
    year: 1000,
    facelift: true,
    hong: function() {
        console.log(`${this.model}: Beep beep!`)
    },
}
car2.hong() // принтираме функцията


//change execution context
let singleHonk = car.hong;
singleHonk();