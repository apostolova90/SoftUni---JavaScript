
// АЗ

function activationKeys(arr) {
 
let string = arr.shift();

for (let i = 0; i < arr.length; i++) {
    let tokens = arr[i].split(">>>");
    let command = tokens[0];

    if (command === "Generate"){
        break;
    }

    if (command === "Slice"){
        let index1 = Number(tokens[1])
        let index2 = Number(tokens[2])
        let firstPart = string.substring(0, index1);
        let secondPart = string.substring(index2, string.length);
        string = firstPart + secondPart
        console.log(string)
    }

    if (command === "Flip"){
        let upprerOrLower = tokens[1]
        let index1 = Number(tokens[2])
        let index2 = Number(tokens[3])

        let firstPart = string.substring(0, index1)
        let secondPart = string.substring(index1, index2)
        let thirdPart = string.substring(index2, string.length)
            if (upprerOrLower === "Upper"){
                secondPart = secondPart.toUpperCase();
            } else {
                secondPart = secondPart.toLowerCase();
            }
        string = firstPart + secondPart + thirdPart
        console.log(string)
    }

    if (command === "Contains"){
        let substring = tokens[1];
        if (string.includes(substring)){
            console.log(`${string} contains ${substring}`)
        } else {
            console.log("Substring not found!")
        }
    }
}

console.log(`Your activation key is: ${string}`)
   
}
activationKeys([
"abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])

console.log("________________")

activationKeys(([
"134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])
)






// Another


/* function activationKeys(arr) {

    let key = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Generate") {
            break;
        }
        let tokens = arr[i].split('>>>');
        let command = tokens[0];
        if (command === "Contains") {
            let substring = tokens[1];
            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (command === "Flip") {
            let type = tokens[1];
            let startIndex = Number(tokens[2]);
            let endIndex = Number(tokens[3]);
            let substring = 0;
            if (type === "Upper") {
                substring = key.substring(startIndex, endIndex).toUpperCase();
            } else if (type === "Lower") {
                substring = key.substring(startIndex, endIndex).toLowerCase();
            }
            let first = key.substring(0, startIndex);
            let second = key.substring(endIndex, key.length);
            key = first + substring + second;
            console.log(key);
        } else if (command === "Slice") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let first = key.substring(0, startIndex);
            let second = key.substring(endIndex, key.length);
            key = first + second;
            console.log(key);
        }
    }
    console.log(`Your activation key is: ${key}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]) */





    /* Anothere:
    function activationKeys(arr) {
        let raw = arr.shift()
        arr = arr.slice(0, arr.indexOf("Generate"))
        const actions = {
            Contains: contains,
            Flip: flip,
            Slice: slice,
        }
    
        function contains(s) {
            if (raw.includes(s)) {
                console.log(`${raw} contains ${s}`)
            } else {
                console.log(`Substring not found!`)
            }
        }
    
        function flip(lCase, start, end) {
            const sub = raw.substring(start, end)
            raw = raw.replace(
                sub,
                lCase === 'Upper' ? sub.toLocaleUpperCase() : sub.toLocaleLowerCase()
            )
    
            console.log(raw)
        }
    
        function slice(start, end) {
            raw = raw.substring(0, start) + raw.substring(end)
    
            console.log(raw)
        }
    
        arr.forEach(x => {
            const [a, b, c, d] = x.split(">>>")
    
            actions[a](b, c, d)
        })
        
        console.log(`Your activation key is: ${raw}`)
    }
    activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]) */