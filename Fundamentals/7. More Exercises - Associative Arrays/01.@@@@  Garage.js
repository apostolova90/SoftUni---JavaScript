
// АЗ

function garage(array) {

    let allGarages = {};

    for (let line of array) {
        let [garageNumber, carInfo] = line.split(' - ');
        carInfo = carInfo.split(': ').join(' - '); // подменяме знака -----     от :, става -

        if (allGarages.hasOwnProperty(garageNumber)) { //проверяваме дали номера на гаража съществува
            allGarages[garageNumber].push(carInfo); // // ако съществува, добавяме САМО информацията към него --- ['color - blue, fuel type - diesel']
        } else {
            allGarages[garageNumber] = [carInfo]; // ако не съществува, добавяме ЕДНОВРЕМЕННО И номера на гаража И инофмрацията към него
        }  
    }

    let entries = Object.entries(allGarages); // вадим двойките елементи от ключа - ключ и стойност
    console.log(entries);
    for (let line of entries) { // минаваме през всяка двойка елементи 
        let garageNum = line.shift(); // отденяме номера на гаража
        console.log(`Garage № ${garageNum}`);// и го принтираме
        for (let carArr of line) { // минаваме през всеки от останалите елемент записан по line:
                                   // ['color - blue, fuel type - diesel'      ,    'color - red, manufacture - Audi']
            for (let carInfo of carArr) { // минаваме през всеки от елементите в carArr:
                                             // 'color - blue, fuel type - diesel'
                                             // 'color - red, manufacture - Audi'
                console.log(`--- ${carInfo}`) // и принтираме всеки елемент
            }
        }
    }
 
        
}
garage([
'1 - color: blue, fuel type: diesel', 
'1 - color: red, manufacture: Audi', 
'2 - fuel type: petrol', 
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])

garage([
'1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']) 







// ДРУГ

/* function garage(array) {
    let resultObj = {};
 
    for (let line of array) {
        let [garageNum, carInfo] = line.split(' - ');
        carInfo = carInfo.split(': ').join(' - ');
        if (resultObj.hasOwnProperty(garageNum)) {
            resultObj[garageNum].push(carInfo);
        } else {
            resultObj[garageNum] = [carInfo];
        }
    }
    let entries = Object.entries(resultObj);
    for (let line of entries) {
        let garageNum = line.shift();
        console.log(`Garage № ${garageNum}`);
        for (let carArr of line) {
            for (let carInfo of carArr) {
                console.log(`--- ${carInfo}`)
            }
        }
    }
}
garage(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])
garage(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423']) */