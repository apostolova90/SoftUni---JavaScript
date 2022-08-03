// АЗ

function mirrorWords(text) {

    let regex = /(@|#)(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let allMirrorWords = [];
    let counter = 0;

    let match = regex.exec(text) // откриваме всички Mirror Words в текста ---  (7) ['#poOl##loOp#', '#', 'poOl', '#', '#', 'loOp', '#', index: 11, input: '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$lo…@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r', groups: {…}]

    if (!match) {  // ако regex-a НЕ открива нищо
        console.log("No word pairs found!");
        console.log("No mirror words!");
    } else { // ако открива:
        while (match !== null){ // въртим докато вече няма matches
            counter++ // бройм всяка двойка думи, без значение дали е mirror или не
 
            let firstWord = match.groups['firstWord'] // взимаме първата дума
            let secondWord = match.groups['secondWord'] // взимаме втората
            let reversed = secondWord.split("").reverse().join("") // обръщаме втората
                if (firstWord === reversed){ // проверяваме дали са еднакви и ако СА:
                    allMirrorWords.push(`${firstWord} <=> ${secondWord}`) // ги наливаме в масив ---> (3) ['Part <=> traP', 'leveL <=> Level', 'sAw <=> wAs']
                }
            match = regex.exec(text) // ЗАДЪЛЖИТЕЛНО занулявам данните, за да мине на следваща позиция
        }
        let mirrorWordsToPrint = allMirrorWords.join(", ") // превръшам масива в стринг ['Part <=> traP', 'leveL <=> Level', 'sAw <=> wAs']   ===>   Part <=> traP, leveL <=> Level, sAw <=> wAs
        console.log(`${counter} word pairs found!`) // принтирам броя на откритите двойки думи
        if (allMirrorWords.length === 0){ // проверявам дали има открити някакви mirror words (ако няма, масива ще е празен, т.е. = 0)
            console.log("No mirror words!") // ако няма, принтирам това
        } else { // ако има принитрам това:
            console.log("The mirror words are:")  
            console.log(mirrorWordsToPrint)     
        }
    }

}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
console.log("_________")
mirrorWords([`#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@`])
console.log("_________")
mirrorWords([`#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#`])








// АЗ

/* function mirrorWords(data) {

    let regex = /([@|#])(?<firstword>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g //{2} е задължително след \1, защото думите започват и завършват с един от двата знака (@, #) и ако не сложим {2}  няма да хванем случайте, когато знака присъства 2 пъти един след друг
    let firstWord = ""
    let secongWord = ""

    let mirrorWords = []
    let count = 0; 

    let match = regex.exec(data)


    while (match !== null){
                count++
        let firstWord = match.groups['firstword'];
        let secongWord = match.groups['secondWord'];

        let reversedSecondWords = secongWord.split('').reverse().join('');
        if (firstWord === reversedSecondWords){
            mirrorWords.push(` ${firstWord} <=> ${secongWord}`)
        } 

        match = regex.exec(data)
}

    if (count <= 0){
        console.log("No word pairs found!")
    } else {
        console.log(`${count} word pairs found!`)
    }

    if (mirrorWords <= 0){
        console.log("No mirror words!")
    } else {
        console.log(`The mirror words are:`)
        console.log(`${mirrorWords}`)
    }
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])
mirrorWords([`#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@`])
mirrorWords([`#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#`])
 */








// Another


/* function mirrorWords(arr) {

    let string = arr[0];
    let regex = /(#|@)(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;
    let count = 0;
    let pairsArr = [];

    while ((pairs = regex.exec(string)) !== null) {
        count++;
        let word1 = pairs.groups.firstWord;
        let word2 = pairs.groups.secondWord;
        let reversed = '';
        for (let i = word2.length - 1; i >= 0; i--) {
            reversed += word2[i];
        }
        if (word1 === reversed) {
            pairsArr.push(`${word1} <=> ${word2}`);
        }
    }

    if (count === 0) {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    } else {
        console.log(`${count} word pairs found!`);
        if (pairsArr.length === 0) {
            console.log("No mirror words!");
        } else {
            console.log("The mirror words are:");
            console.log(pairsArr.join(', '));
        }
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##trap##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAS#r#@w1r	']) */






// Another

/* function mirrorWords(input) {
    let string = input[0];
    let pairCounter = 0;
    let mirrorWordsArr = [];
    let result = [];
    let pattern = /(@|#)[A-Za-z]{3,}(\1)(\1)[A-Za-z]{3,}(\1)/g;
    let match = pattern.exec(string);
    while (match !== null) {
        let pair = match[0];
        pair = pair.split("##").join("").split("@@").join("")
        let stringOfPair = pair.split("");
        stringOfPair.shift();
        stringOfPair.pop();
        let midIndex = (stringOfPair.length) / 2;
        let firstWord = stringOfPair.splice(0, midIndex);
        let secondWord = stringOfPair;
        pairCounter++

        let reversed = secondWord.reverse().join("");
        firstWord = firstWord.join("");
        if (firstWord === reversed) {
            mirrorWordsArr.push(firstWord);
            secondWord = secondWord.reverse().join("")
            mirrorWordsArr.push(secondWord);
        }
        match = pattern.exec(string);
    }
    if (pairCounter >= 1) {
        console.log(`${pairCounter} word pairs found!`)
    } else {
        console.log(`No word pairs found!`)
    }
    if (mirrorWordsArr.length <= 0) {
        console.log(`No mirror words!`)
    } else {
        for (let i = 0; i < mirrorWordsArr.length; i += 2) {
            result.push(mirrorWordsArr[i] + " <=> " + mirrorWordsArr[i + 1]);
        }
        console.log(`The mirror words are:`);
        console.log(result.join(", "));
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log('---');
mirrorWords([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'
]); */