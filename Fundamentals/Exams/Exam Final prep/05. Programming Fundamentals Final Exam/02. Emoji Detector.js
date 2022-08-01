
// АЗ 

function emojiDetector(input) {


}  
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])





// АЗ + споделена с колеги

/* function emojiDetector(input) {

    // first we calculate the hreshold

    let coolthreshold = 1
    let regexNumbers = /(?<nums>[0-9]{1})/g
    let counter = 0;
    let matchNumbers = regexNumbers.exec(input)
    while (matchNumbers !== null){
        coolthreshold *= Number(matchNumbers.groups.nums)
        matchNumbers = regexNumbers.exec(input)
    }

    // next we calculate the coolness of each emoji

    let regex = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g // ************
    let allCoolEmojies = [];
    let emojiCoolness = 0;

    let match = regex.exec(input)

    while (match !== null){
        counter++
        let emoji = match.groups['emoji'];

        for (char of emoji){
            emojiCoolness += char.charCodeAt(0) 
        }
        if (emojiCoolness >= coolthreshold){
            allCoolEmojies.push(match[0])  // взимаме самата дума със знаците, който трябва да я обграждат

        }
        emojiCoolness = 0;
        match = regex.exec(input)
    }

    console.log(`Cool threshold: ${coolthreshold}`)
    console.log(`${counter} emojis found in the text. The cool ones are:`)

    for (let emoji of allCoolEmojies){
        console.log(emoji)
    }

}  
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
 */





// Another


 /* function emojiDetector(arr) {

    let string = arr.shift();
    let threshold = 1;
    let emojiCount = 0;
    let emojiArr = [];
    let regex = /(\:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g;

    for (let char of string) {
        if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
            threshold *= char;
        }
    }

    //  let numsArr = [];
    
    //  for (let char of string) {
    //    if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
    //        numsArr.push(Number(char));
    //        }
    //    }
    
    //    let threshold = numsArr.reduce((a, b) => a * b);
   

    while ((valid = regex.exec(string)) !== null) {
        let validEmoji = valid.groups.emoji;
        emojiCount++;
        let coolCount = 0;
        for (let i = 0; i < validEmoji.length; i++) {
            let num = Number(validEmoji.charCodeAt(i));
            coolCount += num;
        }
        if (coolCount >= threshold) {
            emojiArr.push(valid[0]);
        }
    }

    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    for (let el of emojiArr) {
        console.log(el);
    }

}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
 */