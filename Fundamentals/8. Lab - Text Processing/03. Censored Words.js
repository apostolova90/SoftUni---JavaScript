function censoredWords(text, searchWOrd){

    let splitted = text.split(searchWOrd); // разделяме текста там където присъства думата и става:  ['A ', ' sentence with some words']
    let res = splitted.join("*".repeat(searchWOrd.length)) // след това му казваме да съедини същите тези елемнти със знака
    
    console.log(res)
}
censoredWords('A small sentence with some words', 'small')
censoredWords('Find the hidden word', 'hidden')