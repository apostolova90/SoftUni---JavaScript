function printCertificate(grade, names) {

    let fullName = getFullName(names[0], names[1]);
    if (grade < 3){
        console.log(`${fullName} does not qualify`)
    } else {
        printHeather()
        console.log(fullName)
        formatGrade(grade)
    }
}

printCertificate(2.99,["A", "B"])
console.log("___________")
printCertificate(5.70,["C", "D"])
//до тук е цялото решение на зарачата, а по-долу въвеждаме всичко останало

function printHeather() {
    console.log(`---- {@} -----`)
    console.log(`____--__@__--___`)
    console.log(`<---___--->`)
}

function getFullName (firtName, lastName) {
    return firtName + " " + lastName
}
function formatGrade(grade){

    if (grade < 3.00){
        console.log(`Fail (2)`)
    } else if (grade >= 3.00 && grade < 3.50){
        console.log(`Poor (${grade.toFixed(2)})`)
    } else if (grade >= 3.50 && grade < 4.50){
        console.log(`Good (${grade.toFixed(2)})`)
    } else if (grade >= 4.50 && grade < 5.50){
        console.log(`Very good (${grade.toFixed(2)})`)
    } else {
        console.log(`Excellent (${grade.toFixed(2)})`) 
    }
}