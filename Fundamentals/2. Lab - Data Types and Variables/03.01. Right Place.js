
function rightPlace(firstString, char, secondString){

    let res = "";

    for (let i = 0; i < firstString.length; i++){
        let currentChar = firstString[i];
        if (currentChar === "_"){
            res += char;
        } else {
            res += currentChar
        }
    }
    if (res === secondString){
        console.log("Matched")
    } else {
        console.log("Not Matched")
    }
}
rightPlace('Str_ng', 'I', 'Strong')


