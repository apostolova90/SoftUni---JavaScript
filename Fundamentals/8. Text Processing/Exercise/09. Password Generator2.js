

// Another:


function passwordGenerator(arr) {

    let joined = arr[0] + arr[1];
    let word = arr[2];
    let j = 0;

    for (let i = 0; i < joined.length; i++) {
        let letter = joined[i];
        if (letter === "a" || letter === "e" || letter === "i"
            || letter === "o" || letter === "u") {
            let replacment = word[j].toUpperCase();
            joined = joined.replace(letter, replacment);
            j++;
            if (j > word.length - 1) {
                j = 0;
            }
        }
    }

    let pass = '';

    for (let i = joined.length - 1; i >= 0; i--) {
        pass += joined[i];
    }

    console.log(`Your generated password is ${pass}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])

