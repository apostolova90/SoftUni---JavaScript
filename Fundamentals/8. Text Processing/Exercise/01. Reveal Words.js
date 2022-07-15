function revealWords(words, sentence){

    let wordsToReveal = words.split(', '); // разделяме елементите в първата част на инпута и ги превръщаме в масив
    let sentenceArr = sentence.split(' '); // разделяме елементите в втората част на инпута и ги превръщаме в масив

    for (let element of wordsToReveal){  // завъртаме през думите, които търсим

        for (let word of sentenceArr){ // минаваме през думите в текста в масива
            if(word.includes('*') && word.length === element.length){ // и проверяваме дали думата на която сме съдържа *
                    // и дали дължината на думата която търсим, съвпада с дължината, на която сме
                sentence = sentence.replace(word, element); // ако отговаря на условията, заменяме думата
            }
        }
    }
    console.log(sentence)
}
revealWords('great','softuni is ***** place for learning new programming languages');
console.log('-------------')
revealWords('great, learning','softuni is ***** place for ******** new programming languages');