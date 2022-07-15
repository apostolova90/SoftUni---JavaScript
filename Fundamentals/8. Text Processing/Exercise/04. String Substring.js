function stringSubstring(searchWord, sentence){

    let words = sentence.split(' ');

    for (let word of words){ // завъртаме през думите в текста
        if(word.toLowerCase() === searchWord.toLowerCase()){ // проверяваме дали думата която търсим е еднаква с тази, на тази, на която сме от изречението
            console.log(searchWord);
            return;
        } 
    }

    console.log(`${searchWord} not found!`);
}
stringSubstring('javascript','JavaScript is the best programming language');
console.log('-------------')
stringSubstring('python','JavaScript is the best programming language');