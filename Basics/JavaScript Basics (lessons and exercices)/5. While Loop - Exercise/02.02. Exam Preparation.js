function examPreparation(input){
    let countOfBadGrades = input[0];
    let index = 1;
    let command = input[index];
    let numberOfProblems = 0;
    let sumOfGrades = 0;
    let currentNumberOfBadGrades = 0;
    let lastProblemName = "";

    while(command !== "Enough"){
        lastProblemName = command = input[index];
        numberOfProblems++;
        index++;
        let currentGrades = Number(input[index])
        ;
        sumOfGrades += currentGrades
        if(currentGrades <= 4){
            currentNumberOfBadGrades++;
        }
        if (currentNumberOfBadGrades >= countOfBadGrades){
            console.log(`You need a break, ${countOfBadGrades} poor grades.`)
            break;
        }
        index++;
        command = input[index];
    }
    if(command === "Enough"){
        let avgGrade = (sumOfGrades / numberOfProblems).toFixed(2);
        console.log(`Average score: ${avgGrade}`);
        console.log(`Number of problems: ${numberOfProblems}`);
       
        console.log(`Last problem: ${lastProblemName}`)
    }
}
examPreparation(["3","Money","6","Story","4","Spring Time","5","Bus","6","Enough"]);
examPreparation(["2","Income","3","Game Info","6","Best Player","4"]);