function passwordReset(array) {


let password  = array.shift()

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(" ")
        let command = tokens[0]

        if (command === "Done"){ // при получаваме команда за край
        break;
        }

        if (command === "TakeOdd"){  
            let workingString = ''
            for (let i = 0; i < password.length; i++){
                if (i % 2 !== 0){
                    workingString += password[i]
                }
            }
            password = workingString;
            console.log(password);
        }

        if (command === "Cut"){  
            let index = Number(tokens[1])
            let length = Number(tokens[2])
            let secondIndex = index + length // събираме двете, за да получим индекса, от който трябва да започнем да отделяме втората част а стринга
                                    // целта е да вземем двете части около стринга, който трябва да махнем, за д аможем после да ги съберем
            let firstPart = password.substring(0, index)
            let secondPart = password.substring(secondIndex, password.length)

            password = firstPart + secondPart
            console.log(password)
        }

        if (command === "Substitute"){ 
            let substring = tokens[1]
            let substitute = tokens[2]
            if (!password.includes(substring)){
                console.log("Nothing to replace!")
            } else {
                while (password.includes(substring)){ // задължително с WHILE, за да мине през всички букви, ав слуяай че някоя се повтаря повече от 1 път
                    password = password.replace(substring, substitute)
                } 
                console.log(password)
            }   
        }
    }
    console.log(`Your password is: ${password}`)
}
passwordReset([
"Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]);
   
console.log('------------------------')

passwordReset([
"up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]); 


// Радо (колега)
/* function passwordReset(arr) {
    let message = arr.shift();
    
    for (const line of arr) {
      if (line === 'Done') {
        break;
      }
   
      if (line === 'TakeOdd') {
        let password = '';
   
        for (let i = 0; i < message.length; i++) {
          if (i % 2 !== 0) {
            password += message[i];
          }
        }
        
        message = password;
        console.log(message);
      } else if (line.includes('Cut')) {
        let newLine = line.replace('Cut ', '');
        let [index, length] = newLine.split(' ');
        index = Number(index);
        length = Number(length);
        let stringToRemove = message.substring(index, index + length);
        message = message.replace(stringToRemove, '');
        console.log(message);
      } else if (line.includes('Substitute')) {
        let newLine = line.replace('Substitute ', '');
        let [subString, substitute] = newLine.split(' ');
        if (!message.includes(subString)) {
          console.log(`Nothing to replace!`);
          continue;
        }
        while (message.includes(subString)) {
          message = message.replace(subString, substitute);
        }
        console.log(message);
      }
    }
    console.log(`Your password is: ${message}`);
  }
   
  passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]);
   
  console.log('------------------------')
  passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]); */




// Another


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