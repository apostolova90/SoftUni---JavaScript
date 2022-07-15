function phoneBook(array){
// !!!! тук не правим проверки, а използваме просто обекти

let phoneBook = {};

for (let lineInfo of array){
    let [name, phoneNumber] = lineInfo.split(" ")

    phoneBook[name] = phoneNumber //така също презаписваме номера, ако някое име се повтори
}

for (let key in phoneBook){
    console.log(`${key} -> ${phoneBook[key]}`)
    }
}

phoneBook([
'Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'
])

phoneBook([
'George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344'
])











/* с тошко на лекции */

/* function phoneBook(array){

    // !!!! тук не правим проверки, а използваме просто обекти

    let phoneBooks = {}

    for (let line of array){
        let tokens = line.split(" ")
        let name = tokens[0]
        let phoneNumber = tokens[1]

        phoneBooks[name] = phoneNumber; //така също презаписваме номера, ако някое име се повтори
    }

    for(let key in phoneBooks){
        console.log(`${key} -> ${phoneBooks[key]}`)
    }

}
phoneBook([
'Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'
])

phoneBook([
'George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344'
]) */