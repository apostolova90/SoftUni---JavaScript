
// Another


function schoolRegister(input) {
    let arr = [];
    let arrOfObjs = [];
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let [studentName, grade, averageScore] = input[i].split(', ')
        studentName = studentName.split(': ').pop();
        grade = Number(grade.split(': ').pop());
        averageScore = Number(averageScore.split(': ').pop());
        obj= {
            studentName,
            grade,
            averageScore,
        }
        arrOfObjs.push(obj);
    }
    for (const element of arrOfObjs) {
        if (element['averageScore'] >= 3) {
            arr.push([element['studentName'], element['grade'], element['averageScore']]);
        }
    }
    arr.sort((a, b) => a[1] - b[1]);


    let currentGrade = 0;
    let students = [];
    let studentsCurrentGrade = 0;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        let studentGrade = arr[j][1];
        if (currentGrade === 0) {
            currentGrade = studentGrade;
        }
        if (studentGrade === currentGrade) {
            students.push(arr[j][0]);
            sum += arr[j][2];
            studentsCurrentGrade++;
            if (j === arr.length - 1) {
                let avgScore = sum / studentsCurrentGrade;
                console.log(`${currentGrade + 1} Grade`);
                console.log(`List of students: ${students.join(', ')}`);
                console.log(`Average annual score from last year: ${avgScore.toFixed(2)}\n`);
               
            }
        } else {
            let avgScore = sum / studentsCurrentGrade;
            console.log(`${currentGrade + 1} Grade`);
            console.log(`List of students: ${students.join(', ')}`);
            console.log(`Average annual score from last year: ${avgScore.toFixed(2)}\n`);
            // console.log();
            currentGrade = studentGrade;
            students = [];
            sum = 0;
            avgScore = 0;
            studentsCurrentGrade = 0;
            j--;
        }

    }
}