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











// на упражнения с Ивайло


/* function pascalCase(input){

    let arr = [];
    let index = 1;
    let end = input.length;
    let cut = 0;

    while(index < end){

        if(input.charCodeAt(index) >= 65 && input.charCodeAt(index) <= 90){
            arr.push(input.slice(cut, input.length));
            cut = index;
        }
        index++;
    }
    arr.push(input.slice(cut, input.length));

    for (let i = 1; i < arr.length; i++){
        arr[i-1] = arr[i-1].replace(arr[i], ''); // махаме от всеки елемент на масива текста от следващия елемент
    }
    console.log(arr.join(', '))
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCase('HoldTheDoor');
pascalCase('ThisIsSoAnnoyingToDo'); */