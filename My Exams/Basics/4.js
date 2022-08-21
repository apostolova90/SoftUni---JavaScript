// пререшена 27.02


function exam(input) {

    const numberOfStudents = Number(input[0]);
    let index = 1;
    let result = 0;

    let topResult = 0;
    let middleResult = 0;
    let lowResult = 0;
    let fail = 0;

    let totalScore = 0;

    for(let i = 0; i <= numberOfStudents; i++) {
        result = Number(input[index]);
        index++;

        if (result >= 5.00){
            topResult++
            totalScore += result;
        } else if (result >= 4.00 && result <= 4.99){
            middleResult++
            totalScore += result;
        } else if (result >= 3.00 && result <= 3.99){
            lowResult++
            totalScore += result;
        } else if (result < 3.00){
            fail++
            totalScore += result;
        }

    }
    let persentageTop = topResult / numberOfStudents * 100;
    let persentageMiddle = middleResult / numberOfStudents * 100;
    let persentageLow = lowResult / numberOfStudents * 100;
    let persentageFail = fail / numberOfStudents * 100;
    let persantageResult = totalScore / numberOfStudents;

console.log(`Top students: ${persentageTop.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${persentageMiddle.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${persentageLow.toFixed(2)}%`);
console.log(`Fail: ${persentageFail.toFixed(2)}%`);
console.log(`Average: ${persantageResult.toFixed(2)}`);
}
exam(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5",]);


/* function logistics(input){
    let index = 0;
    let countOfStudents = Number(input[index]);
    index++;
 
    let fail = 0; 
    let third = 0;
    let second = 0;
    let topStudents = 0;   
    let total = 0; 
    let failNumberOfStudents = 0; 
    let thirdNumberOfStudents = 0;    
    let secondNumberOfStudents = 0;
    let topStudentsNumberOfStudents = 0;

    for(let i = 0; i < countOfStudents; i++){
    let assessmentPerStudent = Number(input[index]);
    index++
    total += assessmentPerStudent;

    if (assessmentPerStudent <= 2.99){
        fail += assessmentPerStudent;
        failNumberOfStudents++
    } else if (assessmentPerStudent >= 3.00 && assessmentPerStudent <= 3.99){
        third += assessmentPerStudent;
        thirdNumberOfStudents++
    } else if (assessmentPerStudent >= 4.00 && assessmentPerStudent <= 4.99){
        second += assessmentPerStudent;
        secondNumberOfStudents++
    } else if (assessmentPerStudent >= 5.00) {
        topStudents += assessmentPerStudent;
        topStudentsNumberOfStudents++
    }
}
let middleAssessment = total / countOfStudents 

let failPercent = failNumberOfStudents / countOfStudents * 100;
let thirdPercent = thirdNumberOfStudents / countOfStudents * 100;
let secondPercent = secondNumberOfStudents / countOfStudents * 100;
let topStudentsPercent = topStudentsNumberOfStudents / countOfStudents * 100;

console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`);
console.log(`Between 4.00 and 4.99: ${secondPercent.toFixed(2)}%`);
console.log(`Between 3.00 and 3.99: ${thirdPercent.toFixed(2)}%`);
console.log(`Fail: ${failPercent.toFixed(2)}%`);
console.log(`Average: ${middleAssessment.toFixed(2)}`);

}
logistics(["10","3.00","2.99","5.68","3.01","4","4","6.00","4.50","2.44","5"]);
logistics(["6","2","3","4","5","6","2.2"]);
 */
