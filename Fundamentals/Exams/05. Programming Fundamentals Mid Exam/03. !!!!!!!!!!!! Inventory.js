.............



























/* Another one:
function inventory(arr) {
    let myInventory = arr.shift().split(', ');

    for (let el of arr) {
        el = el.split(' - ');
        let command = el[0];
        let item = el[1];

        if (command == 'Collect') {
            let indexOfItem = myInventory.indexOf(item);
            if (indexOfItem != -1) {
                continue;
            }
            myInventory.push(item);

        } else if (command == 'Drop') {
            let indexOfItem = myInventory.indexOf(item);
            if (indexOfItem == -1) {
                continue;
            }
            myInventory.splice(indexOfItem, 1);

        } else if (command == 'Combine Items') {
            let [oldItem, newItem] = item.split(':');
            let indexOfOldItem = myInventory.indexOf(oldItem);
            if (indexOfOldItem == -1) {
                continue;
            }
            myInventory.splice(indexOfOldItem + 1, 0, newItem);

        } else if (command == 'Renew') {
            let indexOfItem = myInventory.indexOf(item);
            if (indexOfItem == -1) {
                continue;
            }
            let renewed = myInventory.splice(indexOfItem, 1);
            myInventory.push(renewed);

        } else if (command == 'Craft!') {
            console.log(myInventory.join(', '));
            break;
        }
    }
}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]); */















/* 
Another:

function inventory(arr) {
    let myInventory = arr.shift().split(', ');

    for (let el of arr) {
        el = el.split(' - ');
        let command = el[0];
        let item = el[1];

        if (command == 'Collect') {
            collect(item, myInventory);

        } else if (command == 'Drop') {
            drop(item, myInventory)

        } else if (command == 'Combine Items') {
            combineItems(item, myInventory);

        } else if (command == 'Renew') {
            renew(item, myInventory);

        } else if (command == 'Craft!') {
            printMyInventory(myInventory);
            break;
        }
    }
    function collect(item, myInventory) {
        let indexOfItem = myInventory.indexOf(item);
        if (indexOfItem == -1) {
            myInventory.push(item);
        }
        return myInventory;
    }

    function drop(item, myInventory) {
        let indexOfItem = myInventory.indexOf(item);
        if (indexOfItem != -1) {
            myInventory.splice(indexOfItem, 1);
        }
        return myInventory;
    }

    function combineItems(item, myInventory) {
        let [oldItem, newItem] = item.split(':');
        let indexOfOldItem = myInventory.indexOf(oldItem);
        if (indexOfOldItem != -1) {
            myInventory.splice(indexOfOldItem + 1, 0, newItem);
        }
        return myInventory;
    }

    function renew(item, myInventory) {
        let indexOfItem = myInventory.indexOf(item);
        if (indexOfItem != -1) {
            let renewed = myInventory.splice(indexOfItem, 1);
            myInventory.push(renewed);
        }
        return myInventory;
    }

    function printMyInventory(myInventory) {
        return console.log(myInventory.join(', '));
    }
}
inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]); */