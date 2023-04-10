

// Another


function serializeString(arr) {

    let string = arr[0];
    let stringArr = [];
    let uniqueLettersArr = [];

    for (let i = 0; i < string.length; i++) {
        stringArr.push(string[i]);
    }

    uniqueLettersArr.push(stringArr.shift());

    for (let letter of stringArr) {
        if (!uniqueLettersArr.includes(letter)) {
            uniqueLettersArr.push(letter);
        }
    }

    let finalArr = [];

    for (let letter of uniqueLettersArr) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === letter) {
                finalArr.push(i);
            }
        }
        console.log(`${letter}:${finalArr.join('/')}`);
        finalArr = [];
    }

}

serializeString(["avjavamsdmcalsdm"])