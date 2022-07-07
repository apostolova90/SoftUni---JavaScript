// АЗ

// сортиране по keys (имена)

// замяна на стойност при повтарящ се key 

function adressBook(array){

    let adressObject = {};

    for (let lineInfo of array){
        let [name, address] = lineInfo.split(":"); // разделяме елемнтите в масиява под различни променливи
         adressObject[name] = address // отново записваме всяко име и всеки адрес в масива, 
    }                                 // като по този начин, ако името се повтори, но с друг адрес, то стария ще се презапишв


        let unsortedKeys = Object.keys(adressObject)    //връща масив, в който се намират всияки КЛЮЧОВЕ
    
    let sorted = unsortedKeys.sort((a,b) => a.localeCompare(b))  // сортирам ключовете 
    
    
    for (let key of sorted) {      // завъртам през масива с новите преподредени ключове 
        console.log(key,"->",adressObject[key])   // и принтирам тях и свързаните към тях (в обекта) стойности
        } 


}
adressBook([
'Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])

adressBook([
'Bob:Huxley Rd',
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










// сортиране с матрица - от лекциите с Тошко


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