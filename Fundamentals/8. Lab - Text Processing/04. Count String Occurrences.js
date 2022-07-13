function countStringOccurences(text, word){

let splitted = text.split(" ");
let count = 0; 
for (let el of splitted){

if (el === word){
    count++
    }
}

console.log(count)

}
countStringOccurences(
'This is a word and it also is a sentence', 
'is');

countStringOccurences(
'softuni is great place for learning new programming languages',
'softuni')