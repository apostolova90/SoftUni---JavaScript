function modernTimes(input){

    let sentence = input.split(' ');

    for (let word of sentence){

        if(word.startsWith('#') && word.length > 1){ // проверяваме дали думата започва с # и дали думата на кяото сме е по-дълга от 0 (защото имаме и единичен знак #)
            let flag = true;
            let wordLower = word.toLowerCase() // превръщаме всяка буква в думата, в малка

            
            for (let index = 1; index < wordLower.length; index++){

            
                if(wordLower.charCodeAt(index) < 97 || wordLower.charCodeAt(index) > 122){ // проверяваме дали думата съдържа цифри 
                    flag = false;
                    break;
                }
            }
            if(flag){
                console.log(word.slice(1))
            }
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('-------------')
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');