function pascalCaseSplitter(string) {

    let resultArr = [];
    let currentWord = '';

    for (let i = 0; i < string.length; i++) { // минаваме през всички букви в стринга
        let currentChar = string[i];
        if (currentChar === currentChar.toUpperCase()) { // и ако някоя е главна
            resultArr.push(currentWord); // добавяме празния стринг currentWord в масив resultArr, 
// (при всеки следващ път когато стигнем до главна буква, в масив resultArr ще добавя вече не празен стринг а напълнения стринг, който ще съдържа една голяма буква и малките след нея
            currentWord = ''; // пак задаваме че currentWord е празен стринг, и започваме отново да го пълним
            currentWord += currentChar; // тук добавяме към празния стринг голямата буква
        } else {
            currentWord += currentChar; // а тук добавяме всички малки букви
        }
    }
    resultArr.push(currentWord); // когато стигнем до края на стринга през който въртим, пушваме и последната дума в масив resultArr
    resultArr.shift(); // разделяме думите в масива по мразно място
    console.log(resultArr.join(', ')); // и принтираме
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');
