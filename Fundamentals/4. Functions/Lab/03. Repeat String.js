function repeatString(string, num){

let output = "" //string

    for(let i = 0; i < num; i++) {
        output += string
    }
    console.log(output)
}
repeatString("abc", 3)
repeatString("String", 2)
