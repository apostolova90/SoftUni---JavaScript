function theImitationGame(array) {

let workingArray = array.shift(); //взимаме първата част върху която ще работим

for (let line of array){ //еъртим през всеки елемент от масива
    let lineInfo = line.split('|') // и разделяме отделните части на елемента
    let command = lineInfo[0]; // и записваме всяка една от тях под отделна променлива
    let first = lineInfo[1];
    let second = lineInfo[2];





}


}
theImitationGame([
    "zzHe", 
    "ChangeAll|z|l", 
    "Insert|2|o", 
    "Move|3", 
    "Decode"]);












// друг

/* function theImitationGame(arr) {

    let message = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Decode") {
            break;
        }
        let tokens = arr[i].split('|');
        let command = tokens[0];
        if (command === "ChangeAll") {
            let substring = tokens[1];
            let replacement = tokens[2];
            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
        } else if (command === "Insert") {
            let index = Number(tokens[1]);
            let value = tokens[2];
            let first = message.substring(0, index);
            let second = message.substring(index, message.length);
            message = first + value + second;
        } else if (command === "Move") {
            let lettersCount = Number(tokens[1]);
            let first = message.substring(0, lettersCount);
            let second = message.substring(lettersCount, message.length);
            message = second + first;
        }
    }
    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ]) */
