function storeCatalogue(array){

    // първо сортиваме всички стрингове по първа буква
    let result = array.sort((a,b) => a.localeCompare(b));
    
    let currentElement = [];
    let firstChar =''

    // минаваме и сплитваме всички елементи в масива
    for (let i = 0; i < result.length; i++) { 
        currentElement = result[i].split(' : ') // ['Anti-Bug Spray', '15']
        
        // след това взимаме първата буква на първия стринг във всеки масив
        if (result[i][0] !== firstChar){ // и ако е различна от вече записания "firstChar"
            console.log(result[i][0]); // я принтирай
        }

        // след това принтираме всички продукти започващи с дадената първа буква
        console.log(` ${currentElement[0]}: ${currentElement[1]}`)

        // обновяваме "firstChar", за да се отпечатва буквата преди всеки продукт, започващ с нея
        firstChar = result[i][0];
        
    }
}
storeCatalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);





// Second way - with object

/* function storeCatalogue(array){

    let result = array.sort((a,b) => a.localeCompare(b));
    
    let currentElement = [];
    let firstChar =''
    let obj = {};

    for (let i = 0; i < result.length; i++) { 
        let[product, price] = result[i].split(' : ');
        
        obj[product] = price;

        if (result[i][0] !== firstChar){ // и ако е различна от вече записания "firstChar"
            console.log(result[i][0]); // я принтирай
        }

        console.log(` ${product}: ${obj.product}`);
        firstChar = result[i][0];

    }
}
storeCatalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']); */