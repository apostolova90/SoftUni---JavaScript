function logistics(input){
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
/* logistics(["6","2","3","4","5","6","2.2"]);  */
