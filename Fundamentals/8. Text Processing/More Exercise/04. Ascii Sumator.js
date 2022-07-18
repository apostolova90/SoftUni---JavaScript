function asciiSumator(arr){

    let firstCharNumber = arr.shift(", ").charCodeAt()
    let secondCharNumber = arr.shift(", ").charCodeAt()
    let string = arr.shift().split("")
    let sum = 0;

    for (char of string) {
        let charNumber = char.charCodeAt()

    if (firstCharNumber > secondCharNumber){
        if (charNumber < firstCharNumber && charNumber > secondCharNumber) {
            sum += charNumber
        } 
    } else {
        if (charNumber > firstCharNumber && charNumber < secondCharNumber) {
            sum += charNumber
        } 
    }
    
}
    console.log(sum)
    
}
asciiSumator([
'.',
'@',
'dsg12gr5653feee5'])

console.log("________________")

asciiSumator([
'?',
'E',
'@ABCEF'])

console.log("________________")

asciiSumator([
'a',
'1',
'jfe392$#@j24ui9ne#@$'])