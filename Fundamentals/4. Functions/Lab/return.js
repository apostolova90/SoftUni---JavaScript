/* let firstName = "Angel"
let lastName = "Georgiev" */

//ако не искаме да ги пишем ръчно, а с функция

let fullName = getFullName("Angel", "Georgiev") // За да запазим цялото име 

function getFullName (firtName, lastName) {
    return firtName + " " + lastName
}


___________________________________________


// да проверим дали ученик има по-голяма оценка от 3
function pass(grade) {
    return grade >= 3
}
// щее ми върне true или false


___________________________________________

let increment = x => x + 1 
// let increment = function(x){return x + 1}


let sum = (a,b) => a + b 