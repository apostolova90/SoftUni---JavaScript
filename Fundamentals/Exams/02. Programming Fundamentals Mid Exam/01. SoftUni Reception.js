function softuniReception(array){

    let numberOfStudents = Number(array.pop()) //маха последния елемент от масива и го записвам под нова величина

    let index = 0;
    let firstGroup = Number(array[index]);
    index++;
    let secondGroup = Number(array[index]);
    index++;
    let thirdGroup = Number(array[index]);
    index++;

    let studentsForAllEmployees = firstGroup + secondGroup + thirdGroup;

    let hoursNeeded = 0

    while (numberOfStudents > 0){
        hoursNeeded++
        numberOfStudents -= studentsForAllEmployees

        if (hoursNeeded % 4 === 0) {
            hoursNeeded++
        }
    }

    console.log(`Time needed: ${hoursNeeded}h.`)

}
softuniReception(['5','6','4','20'])
softuniReception(['1','2','3','45'])
softuniReception(['3','2','5','40'])