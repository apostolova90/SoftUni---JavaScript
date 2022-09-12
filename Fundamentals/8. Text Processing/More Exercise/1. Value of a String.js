function valueOfAString(arr){

    let string = arr.shift().split("")
    let command = arr.shift()
    let sum =  0;

    if (command === "LOWERCASE"){
        for (let letter of string){   
            let letterNumber = letter.charCodeAt() // записваме позицията зад която се намира дадената буква в Ascii таблицата
            if (letterNumber >= 97 && letterNumber <= 122) {
            sum += letterNumber
            } 
        }
    
    } else {
        for (let letter of string){  
            let letterNumber = letter.charCodeAt() // записваме позицията зад която се намира дадената буква в Ascii таблицата
            if (letterNumber >= 65 && letterNumber <= 90) {
            sum += letterNumber
            } 
        }
    }

    console.log(`The total sum is: ${sum}`)

}
valueOfAString([
'HelloFromMyAwesomePROGRAM',
'LOWERCASE'])

valueOfAString([
'AC/DC',
'UPPERCASE'])