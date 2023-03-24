function serializeString(arr) {

    let string = arr.shift().split("");
    let uniqueLettersArr = [];

    for (let i = 0; i < string.length; i++) {
        if (!uniqueLettersArr.includes(string[i])){
            uniqueLettersArr.push(string[i]);
        }
    }

    let position = [];

    for (let letter of uniqueLettersArr){
        for (let i = 0; i < string.length; i++){
            if (letter === string[i]){
                position.push(i)
            }
        }

        console.log(`${letter}:${position.join('/')}`);
        position = [];
    }

}
serializeString(["avjavamsdmcalsdm"])


