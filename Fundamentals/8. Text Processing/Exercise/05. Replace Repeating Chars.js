function replaceRepeatingChars(string) {

    let result = ''; // създаваме нова лвеличина под формата на стринг, в която да запазваме буквите за принтиране
    let previousChar = 0;

    for (let i = 0; i < string.length; i++) {  // минаваме през елентите в стринга
        let currentChar = string[i];  // записваме новата буква под нова променлива
        if (currentChar !== previousChar) { // сравняваме дали е различна от char
            previousChar = currentChar; // и ако е различна:
            result += currentChar;
        }
    }
    console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');





// на упражнения с Иво

/* function replaceRepeatingChars(input){

    let index = 1;
    let end = input.length;
    let text = input[0];

    while(index < end){
        if(input[index] !== input[index - 1]){
            text += input[index];
        }
        index++;
    }

    console.log(text)
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
replaceRepeatingChars('qqqwerqwecccwd');
 */