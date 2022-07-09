
// друг

/* function thePianist(arr) {

    let pieces = {};
    let num = Number(arr.shift());

    for (let i = 0; i < num; i++) {
        let tokens = arr.shift().split('|');
        let piece = tokens[0];
        let composer = tokens[1];
        let key = tokens[2];
        if (!pieces.hasOwnProperty(piece)) {
            pieces[piece] = [];
            pieces[piece].push(composer);
            pieces[piece].push(key);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Stop") {
            break;
        }
        let tokens = arr[i].split('|');
        let command = tokens[0];
        if (command === "Add") {
            let piece = tokens[1];
            let composer = tokens[2];
            let key = tokens[3];
            if (!pieces.hasOwnProperty(piece)) {
                pieces[piece] = [];
                pieces[piece].push(composer);
                pieces[piece].push(key);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
        } else if (command === "Remove") {
            let piece = tokens[1];
            if (pieces.hasOwnProperty(piece)) {
                delete pieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command === "ChangeKey") {
            let piece = tokens[1];
            let newKey = tokens[2];
            if (pieces.hasOwnProperty(piece)) {
                pieces[piece][1] = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for (let key of Object.keys(pieces)) {
        console.log(`${key} -> Composer: ${pieces[key][0]}, Key: ${pieces[key][1]}`);
    }
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