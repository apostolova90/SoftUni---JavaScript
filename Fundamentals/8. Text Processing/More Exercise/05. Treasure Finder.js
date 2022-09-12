function treasureFinder(inputArr) {
    
    let keySeq = inputArr.shift().split(' '); // ['1', '2', '1', '3']

    for (let line of inputArr) { // минаваме през всички стрингове в масива:
//  [  'ikegfp\'jpne)bv = 41P83X @',
//     'ujfufKt)Tkmyft\'duEprsfjqbvfv = 53V55XA',
//     'find'      ]
        
        if (line === 'find') {
            break;
        }

        let newArr = [];

        for (let char of line) { // минаваме през всяка буква в дадения стринг, на който сме ('ikegfp'jpne)bv = 41P83X @')
            newArr.push(char.charCodeAt()); // взимаме числовата й равностойност от АSCII таблицата и я записваме в мновия масив newArr - [105, 107, 101, 103, 102, 112, 39, 106, 112, 110, 101, 41, 98, 118, 32, 61, 32, 52, 49, 80, 56, 51, 88, 32, 64]
        }
        let index = 0;
        let changedArr = []; // създаваме нов масив
        for (let num of newArr) { // минаваме през числата в масив newArray 
            changedArr.push(num - keySeq[index]); // и намаляме стойността на всяко с числото, което се намира на индекс в масив keySeq, с числото, което се намира на дадена позиция в keySeq
            // 105 - 1 = 104    ;  107 - 2 = 105  ;  .......
            // => [104, 105]

            if (index === keySeq.length - 1) { // по този начин, казваме на програмата да завърта числата в масив keySeq (с които намаляме числата в changedArr),
                index = 0;                     // отново и отново, докато не свършат символите в масив changedArr
            } else {
                index++;
            }

        }
        let decString = '';

        changedArr.forEach(element => { // след това взимаме от Assci таблицата буквите/знаците, които стоят зад новите числа в масив changedArr, и ги записваме в нов СТРИНГ
            decString += String.fromCharCode(element); // [104, 105, 100, 100, 101, 110,..........]       ===>     'hidden&gold&at:20M71W'
        });
        
      
        let type = decString.substring(decString.indexOf('&') + 1, decString.lastIndexOf('&')); // взимаме данните между символите &
        let coordinates = decString.substring(decString.lastIndexOf('<') + 1, decString.lastIndexOf('>')); // взимаме данните между символи < и >
        console.log(`Found ${type} at ${coordinates}`); 
    }
}
treasureFinder([
    '1 2 1 3',
    'ikegfp\'jpne)bv = 41P83X @',
    'ujfufKt)Tkmyft\'duEprsfjqbvfv = 53V55XA',
    'find']);
    
treasureFinder([
    '1 4 2 5 3 2 1',
    'Ulgwh"jt$ozfj!\'kqqg(!bx"A3U237GC',
    'tsojPqsf$(lrne\'$CYfqpshksdvfT$>634O57YC',
    '\'stj)>34W68Z@',
    'find']);