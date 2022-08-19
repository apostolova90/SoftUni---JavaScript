function thePianist(arr) {

    let pieces = {};
    let num = Number(arr.shift()); // отделяме чилото  ---- '3'

    for (let i = 0; i < num; i++) { // въртим до числото, което сме получили в началото на масива
        let tokens = arr.shift().split('|'); //отделяме всеки елемент от всеки ред и го записваме под нова променлива
        let piece = tokens[0];      //Fur Elise, Moonlight Sonata, Clair de Lune
        let composer = tokens[1];  // Beethoven, Beethoven, Debussy
        let key = tokens[2];      //Minor, C# Minor, C# Minor
        if (!pieces.hasOwnProperty(piece)) {
            pieces[piece] = [];
            pieces[piece].push(composer);
            pieces[piece].push(key);
        }
    }

for (let i = 0; i < arr.length; i++) { // след това започвамe да въртим през останалите елементи, които са останали в масива
        if (arr[i] === "Stop") { // казваме какво да стане при команда "stop"
            break;
        }
        let tokens = arr[i].split('|'); // делим елементите на всеки ред ----  'Add|Sonata No.2|Chopin|B Minor'   =>   'Add', 'Sonata No.2', 'Chopin', 'B Minor'
        let command = tokens[0]; // отделяме командата, за да знаем какво да правим

        if (command === "Add") {
            let piece = tokens[1]; // записваме първата променлива
            let composer = tokens[2]; // записваме втората променлива
            let key = tokens[3]; // записваме третата променлива
            if (!pieces.hasOwnProperty(piece)) { // проверяваме дали piese го НЯМА в глявния масив
                pieces[piece] = []; // ако го няма добавяме още един нов ключ в обекта
                pieces[piece].push(composer);
                pieces[piece].push(key);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`); // и принтираме:
            } else {
                console.log(`${piece} is already in the collection!`); // ако го има принтираме това:
            }

        } else if (command === "Remove") {
            let piece = tokens[1]; // записваме първата променлива
            if (pieces.hasOwnProperty(piece)) { // проверяваме дали piese го има в глявния масив
                delete pieces[piece]; //ако го има, го изтриваме (delete)
                console.log(`Successfully removed ${piece}!`); // и принтираме:
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`); // ако го няма принтираме това:
            }


        } else if (command === "ChangeKey") {
            let piece = tokens[1]; // записваме първата променлива
            let newKey = tokens[2]; // записваме втората променлива
            if (pieces.hasOwnProperty(piece)) {  // проверяваме дали piese го има в глявния масив
                pieces[piece][1] = newKey; //ако го има, го подменяме / change
                console.log(`Changed the key of ${piece} to ${newKey}!`); // и принтираме:
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`); //ако го няма принтираме:
            }


        }
    }

    for (let [key, value] of Object.entries(pieces)) { // накрая минаваме през всички entires (двойка ключ и стойност)
        console.log(`${key} -> Composer: ${value[0]}, Key: ${value[1]}`); //и принтираме
    }
// или така:
    /* for (let key of Object.keys(pieces)) { // накрая минаваме през всички keys 
        console.log(`${key} -> Composer: ${pieces[key][0]}, Key: ${pieces[key][1]}`); //и принтираме
    } */
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'])






//Another:

/* function thePianist(arr) {
    arr = arr.slice(0, arr.indexOf("Stop"))
    let pieces = []
    const initialPieces = Number(arr.shift())
    const actions = { Add: add, Remove: remove, ChangeKey: changeKey }

    for (let i = 0; i < initialPieces; i += 1) {
        pieces.push(arr.shift().split("|"))
    }

    function getIndex(a) {
        return pieces.findIndex(x => x[0] === a)
    }

    function add(a, b, c) {
        if (pieces.every(x => x[0] !== a)) {
            pieces.push([a, b, c])
            console.log(`${a} by ${b} in ${c} added to the collection!`)
            return
        }
        console.log(`${a} is already in the collection!`)
    }

    function remove(a) {
        if (getIndex(a) !== -1) {
            pieces.splice([getIndex(a)], 1)
            console.log(`Successfully removed ${a}!`)
            return
        }
        console.log(`Invalid operation! ${a} does not exist in the collection.`)
    }

    function changeKey(a, b) {
        if (getIndex(a) !== -1) {
            pieces[getIndex(a)][2] = b
            console.log(`Changed the key of ${a} to ${b}!`)
            return
        }
        console.log(`Invalid operation! ${a} does not exist in the collection.`)
    }

    arr.forEach(x => {
        const [command, a, b, c] = x.split("|")
        actions[command](a, b, c)
    })
    pieces = pieces
        .sort((a, b) =>
            a[0].localeCompare(b[0]) !== 0
                ? a[0].localeCompare(b[0])
                : a[1].localeCompare(b[1])
        )
        .forEach(x => console.log(`${x[0]} -> Composer: ${x[1]}, Key: ${x[2]}`))
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]) */