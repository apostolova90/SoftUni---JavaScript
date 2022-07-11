
//ДРУГ

// мой коментари

function armies(arr) {

    let leaders = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes("arrives") || arr[i].includes("defeated")) { 
            let tokens = arr[i].split(' '); // сплитваме елемента     'Rick Burr arrives'   =>   ['Rick', 'Burr', 'arrives']
            let command = tokens.pop(); //отделяме посления елемент от масива, за да 
            let leader = tokens.join(' '); // можем да съединим обратно, останалите два
            if (!leaders.hasOwnProperty(leader) && command === "arrives") { // ако лидера го няма и командата е arrives
                leaders[leader] = []; // създаваме масив с името на лидера
            } else if (leaders.hasOwnProperty(leader) && command === "defeated") { // ако пък го има и командата е defeated
                delete leaders[leader];  // изтриваме лидера
            }
        } else if (arr[i].includes(":")) { // ако някой от елемнтите съдържа : 
            let tokens = arr[i].split(': '); // сплитваме по този знак   ----  'Fergus: Wexamp, 30245'    => ['Fergus', 'Wexamp, 30245']
            let leader = tokens[0]; // първата част е лидера
            let splited = tokens[1].split(', '); // разделяме втората част 
            let army = splited[0]; // като първото е армията
            let count = Number(splited[1]); // второто е броя на хората, които отиват в дадената армия
            if (leaders.hasOwnProperty(leader)) {  // ако лидера го има
                leaders[leader].push(army); // записваме дадената армия към него
                leaders[leader].push(count); // и броя на войниците
            }
        } else if (arr[i].includes("+")) {  // ако някой от елемнтите съдържа +
            let tokens = arr[i].split(' + '); // сплитваме по този знак   ----    'Wexamp + 6000'     =>     ['Wexamp', '6000']
            let army = tokens[0];  // първото е армията
            let count = tokens[1]; // второто е броя на хората

            for (let value of Object.values(leaders)) { // минаваме през всички двойки - армия с брой войници в нея  ----- Porter: 58507
                if (value.includes(army)) { // ако армията търсена горе, съществува в обекта
                    value[value.indexOf(army) + 1] += Number(count); // добавя броя войници към вече наличния
                }
            }
        }
    }
                            // трябва да сметнем броя на войниците във всяка армия
    for (let value of Object.values(leaders)) { // затова минаваме през стойността (армиите), които стоят зад всеки ключ (лидерите)
        let total = 0;  
        for (let i = 1; i < value.length; i += 2) { // минава и през дължината на всяка стойност
            total += Number(value[i]);
        }
        value.unshift(total); // добавяме общия сбор в началото на масива
    }
    
    let sortedTotal = Object.entries(leaders).sort(([keyA, valueA], [keyB, valueB]) => valueB[0] - valueA[0]); // сортираме

    for (let key of sortedTotal) { // минаваме през сортирания обект 
        let leaderName = key.shift(); // взимаме името на лидера, (Porter)
        let rest = key.shift(); // всичкички армии ([58507, 'Legion', 55302, 'Terix', 3105.............])
        let totalArmy = rest.shift(); // и тотала на войниците - 58507


        let curr = []; // създаваме нов масив
        for (let i = 0; i < rest.length; i++) { //минаваме през всяка армия, която съдърва име и брой войници
            let armyName = rest.shift(); // отделяме името - 'Legion'
            let armyCount = rest.shift(); // и броя войници - 55302
            curr.push([armyName, armyCount]); // слагаме само двете в новосъздадение масив

        }
        let sorted = curr.sort((a, b) => b[1] - a[1]); // пак сортираме, но този път новия масив
        console.log(`${leaderName}: ${totalArmy}`); 
        for (let el of sorted) { //минаваме през елемнетите в новия масив
            let armyName = el[0]; // записваме първия
            let armyCount = Number(el[1]); // записваме втория
            console.log(`>>> ${armyName} - ${armyCount}`); // и принтираме
        }
    }
}

armies([
    'Rick Burr arrives', 
    'Fergus: Wexamp, 30245', 
    'Rick Burr: Juard, 50000', 
    'Findlay arrives', 
    'Findlay: Britox, 34540', 
    'Wexamp + 6000', 
    'Juard + 1350', 
    'Britox + 4500', 
    'Porter arrives', 
    'Porter: Legion, 55000', 
    'Legion + 302', 
    'Rick Burr defeated', 
    'Porter: Retix, 3205']);
    
    armies([
    'Rick Burr arrives', 
    'Findlay arrives', 
    'Rick Burr: Juard, 1500', 
    'Wexamp arrives', 
    'Findlay: Wexamp, 34540', 
    'Wexamp + 340', 
    'Wexamp: Britox, 1155', 
    'Wexamp: Juard, 43423'])