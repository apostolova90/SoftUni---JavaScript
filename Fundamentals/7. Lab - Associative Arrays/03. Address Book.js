// сортиране на имена


// сортиране по keys

function adressBook(array){

    let result = {}

    for (let line of array){
        let [name, address] = line.split(":")
        result[name] = address // минаваме пак през всички елемнти в масива и ги записваме под name
    }

    let unsortedKey = Object.keys(result) //връща масив, в който се намират всияки ключове
    let softKey = unsortedKey.sort((a,b) => a.localeCompare(b)) // сортирам ключовете
// но това не се е отразило все още на целия обекти, затова:

for (let key of softKey) {  //връзваме всеки key към стойност
    console.log(key,"->",result[key])
    }

}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])

adressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])












// сортиране с матрица


/* function adressBook(array){

    let result = {}

    for (let line of array){
        let [name, address] = line.split(":")
        result[name] = address // минаваме пак през всички елемнти в масива и ги записваме под name
    }

    let entries = Object.entries(result);
    let sortEntires = entries.sort(([keyA,valueA], [keyB,valueB]) => {
        return keyA.localeCompare(keyB)
    })

    for (let [name, address] of sortEntires) {
        console.log(name, "->", address);
    }
}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])

adressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']) */