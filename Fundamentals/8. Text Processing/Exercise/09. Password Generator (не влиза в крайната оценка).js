function passwordGenerator(arr){

    let password = (arr[0] + arr[1])

    let word = arr[2].toUpperCase()
    let vowels = ""
    
    for (let letterToChange of password) {
        if (letterToChange === "a" || letterToChange === "e" || letterToChange === "i" || letterToChange === "o" || letterToChange === "u") {
        vowels += letterToChange
        }  
    }
    vowels = vowels.split("")


        for (let i = 0, j = 0; i < vowels.length; i++, j++){
            if (i === word.length) {
                j = 0;
            }
            password = password.replace(vowels[i], word[j])
            }

            password = password.split("").reverse().join("");

            console.log(`Your generated password is ${password}`)

}
passwordGenerator([
    'ilovepizza', 
    'ihatevegetables',
    'orange'])

passwordGenerator([
    'easymoneyeazylife', 
    'atleasttencharacters', 
    'absolute'])

passwordGenerator([
    'areyousureaboutthisone', 
    'notquitebutitrustyou', 
    'disturbed']) 




// Another:

/* function passwordGenerator(arr) {

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
 */
