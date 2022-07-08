

// АЗ

// с обект
// по колко пъти се появяват определени думи в текст

function wordTracker(array){

let objResult = {}
let searchedWords  = array.shift().split(" "); // отделяме и сплитваме първата част 

for (let word of searchedWords) { //записваме всяка дума от searchedWords, като отделен ключ в обекта - {this: 0, sentence: 0}
    objResult[word] = 0;
}

for (let wordToCheck of array) { //минаваме през всички думи в масива
    if (objResult.hasOwnProperty(wordToCheck)) { //и проверяваме дали някоя думата съответства на дума в обекта
        objResult[wordToCheck]++ // ако я има, добавяме единица към стойността на дадения ключ - {this: 3, sentence: 2}
    }
}

//сортиране: 
let unsorted = Object.entries(objResult) 
let sorted = unsorted.sort((a, b) => b[1] - a[1]) // разменяма б и а накрая, за да ги подреди от голямо към малко
// let sorted = unsorted.sort(function (a, b){return b[1] - a[1]}) // или така изписано - 

for (let [key, value] of sorted) {
    console.log(`${key} - ${value}`);
    }

}
wordTracker([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])

wordTracker([
'is the', 
'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])
