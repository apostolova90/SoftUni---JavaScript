
// друг


/* function secretChat(arr) {

    let message = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Reveal") {
            break;
        }
        let tokens = arr[i].split(':|:');
        let command = tokens[0];
        if (command === "InsertSpace") {
            let index = Number(tokens[1]);
            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index, message.length);
            message = firstPart + ' ' + secondPart;
            console.log(message);
        } else if (command === "Reverse") {
            let substring = tokens[1];
            if (message.includes(substring)) {
                let firstIndex = message.indexOf(substring);
                let lastIndex = firstIndex + substring.length;
                let firstPart = message.substring(0, firstIndex);
                let secondPart = message.substring(lastIndex, message.length);
                let reversed = '';
                for (let i = substring.length - 1; i >= 0; i--) {
                    reversed += substring[i];
                }
                message = firstPart + secondPart + reversed;
                console.log(message);
            } else {
                console.log("error");
            }
        } else if (command === "ChangeAll") {
            let substring = tokens[1];
            let replacement = tokens[2];
            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]) */


// Anothere

/* function secretChat(input) {
    let hiddenMessage = input.shift();
    while (input[0] !== "Reveal") {
        let commandLine = input.shift().split(":|:")
        let name = commandLine[0];
        let p1 = commandLine[1];
        let p2 = commandLine[2];
        if (name === 'InsertSpace') {
            let index = p1;
            let firstPart = hiddenMessage.slice(0, index);
            let secondPart = hiddenMessage.slice(index)
            hiddenMessage = firstPart + " " + secondPart;
            console.log(hiddenMessage);
        } else if (name === "Reverse") {
            let str = p1;
            if (hiddenMessage.includes(str)) {
                hiddenMessage = hiddenMessage.replace(str, "");
                let newStr = str.split("").reverse().join("");
                hiddenMessage = hiddenMessage + newStr;
                console.log(hiddenMessage);
            } else {
                console.log("error");
            }
            continue;

        } else if (name === "ChangeAll") {
            let substring = p1;
            let replacement = p2;
            while (hiddenMessage.includes(substring)) {
                hiddenMessage = hiddenMessage.replace(substring, replacement);
            }
            console.log(hiddenMessage);
        }
    }
    console.log(`You have a new text message: ${hiddenMessage}`)
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('---');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]); */