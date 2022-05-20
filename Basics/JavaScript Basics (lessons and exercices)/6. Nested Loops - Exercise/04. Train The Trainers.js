function trainTheTrainers(input){

    let index = 0;
    let countOfJury = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let countsOfGrates = 0;
    let avgGrade = 0;
    while(command !== "Finish") {
        countsOfGrates++;
        let presentationName = command;
        let tempAvrGrade = 0;
        for(let i = 1; i <= countOfJury; i++){
            let tempGrade =Number(input[index])
            index++;
            tempAvrGrade += tempGrade;
    }
    tempAvrGrade = tempAvrGrade  / countOfJury;
    let presentationResult = `${presentationName} - ${tempAvrGrade.toFixed(2)}.`;
    console.log(presentationResult)
    avgGrade += tempAvrGrade;
    command = input[index];
    index++
    }
 avgGrade = avgGrade / countsOfGrates;
 console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}
trainTheTrainers(["2","While-Loop","6.00","5.50","For-Loop","5.84","5.66","Finish"]);
trainTheTrainers(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"]);

