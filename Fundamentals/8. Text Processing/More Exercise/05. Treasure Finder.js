...........

// Another

function treasureFinder(array) {
    let numArr = array.shift().split(' ').map(Number); // [1, 2, 1, 3]
    let line = array.shift(); // 'ikegfp'jpne)bv = 41P83X @'
    while (line !== 'find') {
        let resultArr = [];
        let resultNumArr = numArr;
        let lineLength = line.length; // 25
        while (resultNumArr.length < lineLength) { // въртим през стринг resultNumArr, докато не свърши стринг lineLength
            resultNumArr = resultNumArr.concat(resultNumArr); // [1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3]
        }
        resultNumArr = resultNumArr.slice(0, lineLength);     // [1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1, 2, 1, 3, 1]
 
        for (let i = 0; i < lineLength; i++) {
            let currentChar = String.fromCharCode(line[i].charCodeAt() - resultNumArr[i]); 
            resultArr.push(currentChar) //  ['h', 'i', 'd', 'd', 'e', 'n', '&', 'g', 'o', 'l', 'd']
        }
        let result = resultArr.join('') // 'hidden&gold&at:20M71W?'
        let tokens = result.split('&'); // (3) ['hidden', 'gold', 'at:20M71W?']
        let nameTreasure = tokens[1];
        let cordination = tokens[2].split('<')[1].slice(0, -1)
        console.log(`Found ${nameTreasure} at ${cordination}`)
        line = array.shift();
    }
}
treasureFinder([
'1 2 1 3',
'ikegfp\'jpne)bv = 41P83X @',
'ujfufKt)Tkmyft\'duEprsfjqbvfv = 53V55XA',
'find']);

/* treasureFinder([
'1 4 2 5 3 2 1',
'Ulgwh"jt$ozfj!\'kqqg(!bx"A3U237GC',
'tsojPqsf$(lrne\'$CYfqpshksdvfT$>634O57YC',
'\'stj)>34W68Z@',
'find']); */