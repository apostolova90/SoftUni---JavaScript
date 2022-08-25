function stringGame(input){

    let string = input.shift(); 

    for (let i = 0; i < input.length; i++){ 
        let tokens = input[i].split(" ") 
        let command = tokens[0]; 
        
        if (command === "Done"){
          break;
        }


        if (command === "Change"){
            let char = tokens[1];
            let replacement = tokens[2];
                while (string.includes(char)){ 
                string = string.replace(char, replacement)
                }
                console.log(string)
        }

        if (command === "Includes"){
            let char = tokens[1];
            if (string.includes(char)){
                console.log("True")
            } else {
                console.log("False")
            }
        }

        if (command === "End"){
            let char = tokens[1];
            if (string.endsWith(char)){
                console.log("True")
            } else {
                console.log("False")
            }
        }

        if (command === "Uppercase"){
            string = string.toUpperCase()
            console.log(string)
        }

        if (command === "FindIndex"){
            let char = tokens[1];
            let index = Number(string.indexOf(char))
            console.log(index)
        }

        if (command === "Cut"){
            let startIndex = Number(tokens[1]);
            let count = Number(tokens[2]);
            let endIndex = startIndex + count;

            string = string.substring(startIndex, endIndex)
            console.log(string)
        } 
    }

}
stringGame([
"//Th1s 1s my str1ng!//",
"Change 1 i",
"Includes string",
"End my",
"Uppercase",
"FindIndex I",
"Cut 5 5",
"Done"])

console.log("__________")

stringGame([
"*S0ftUni is the B3St Plac3**",
"Change 2 o",
"Includes best",
"End is",
"Uppercase",
"FindIndex P",
"Cut 3 7",
"Done"])
