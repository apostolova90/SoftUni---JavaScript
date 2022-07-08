
// АЗ
// с обект 
// добавяне и махане на елемент от обект

function piccolo(array){

    let obj = {};

    for (let lineInfo of array){ // минаваме през всеки елемент в масива
        let [command, carNumber] = lineInfo.split(", ") // сплитваме на команда и номер на автомобил

        if (command === "IN"){ // ако командата е IN, го слагаме като стойност към ключа - {ШCA1234TA: 'IN'}
            obj[carNumber] = command
        } else {
            delete obj[carNumber] // ако командата е OUT, изтриваме целия елемнт - ключ + стойност
        }
    }

    let sorted = Object.keys(obj).sort(); // сортираме по keys

    if (sorted.length <= 0){
        console.log("Parking Lot is Empty");
    } else {
        for (let el of sorted) {
            console.log(el);
        }
    }

}
piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])

piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])





// със .set

function piccolo(arr) {
    let parkingLot = new Set();

    for (let line of arr) {
        let [command, carNumber] = line.split(', ');

        if (command === "IN") {
            parkingLot.add(carNumber);
        } else {
            parkingLot.delete(carNumber);
        }
    }

    if (parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let result = Array.from(parkingLot); //превръщаме set в масив
        result.sort();
        for (let car of result) {
            console.log(car);
        }
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])
    
    piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])





