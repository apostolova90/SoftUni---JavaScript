
// друг


/* function passwordReset(arr) {

    let string = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Done") {
            break;
        }
        let tokens = arr[i].split(' ');
        let command = tokens[0];
        if (command === "TakeOdd") {
            let newString = '';
            for (let i = 0; i < string.length; i++) {
                if (i % 2 !== 0) {
                    newString += string[i];
                }
            }
            string = newString;
            console.log(string);
        } else if (command === "Cut") {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            let subStr = string.substring(index, index + length);
            let firstIndex = string.indexOf(subStr);
            let secondIndex = firstIndex + subStr.length;
            let firstString = string.substring(0, firstIndex);
            let secondString = string.substring(secondIndex, string.length);
            string = firstString + secondString;
            console.log(string);
        } else if (command === "Substitute") {
            let substring = tokens[1];
            let substitute = tokens[2];
            if (!string.includes(substring)) {
                console.log("Nothing to replace!");
            } else {
                while (string.includes(substring)) {
                    string = string.replace(substring, substitute);
                }
                console.log(string);
            }
        }
    }
    console.log(`Your password is: ${string}`);
}

passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]) */






// Anothere

/* function passwordReset(input) {
    let str = input.shift();
    for (let line of input) {
        if (line === "Done") {
            console.log(`Your password is: ${str}`)
            break;
        }
        let tokens = line.split(" ");
        let command = tokens[0];
        if (command === "TakeOdd") {
            let newpass = []
            for (let i = 1; i < str.length; i += 2) {
                newpass.push(str[i]);
            }
            str = newpass.join("");
            console.log(str);
        }
        if (command === "Cut") {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            let left = str.slice(0, index);
            let right = str.slice(index + length);
            str = left + right
            console.log(str);
        }
        if (command === "Substitute") {
            let substring = tokens[1];
            let substitute = tokens[2];
            if (!str.includes(substring)) {
                console.log(`Nothing to replace!`);
            } else {
                while (str.includes(substring)) {
                    str = str.replace(substring, substitute);
                }
                console.log(str);
            }
        }
    }
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
console.log('---');
passwordReset([
    "up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
]); */