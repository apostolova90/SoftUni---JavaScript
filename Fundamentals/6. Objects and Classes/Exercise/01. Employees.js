function employees(inputArray) {

    let listObject = {}; //създаваме обекта

    for (const person of inputArray) {
        listObject.name = person; //наливаме в него имената
        listObject.number = person.length;
        console.log(`Name: ${listObject.name} -- Personal Number: ${listObject.number}`)
    }

}
employees(["Silas Butler","Adnaan Buckley","Juan Peterson","Brendan Villarreal"]);
employees(['Samuel Jackson','Will Smith','Bruce Willis','Tom Holland'])