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


/* 

Another:

function softuniReception(input) {
    let employeeOneEfficiency = Number(input.shift());
    let employeeTwoEfficiency = Number(input.shift());
    let employeeThreeEficiency = Number(input.shift());
    let numberOfStudents = Number(input.shift());

    let totalEfficiency = employeeOneEfficiency + employeeTwoEfficiency + employeeThreeEficiency;
    let neededHours = 0;

    while (numberOfStudents > 0) {
        neededHours++;
        if (neededHours % 4 === 0) {
            continue;
        }
        numberOfStudents -= totalEfficiency;
    }
    console.log(`Time needed: ${neededHours}h.`);
}
softuniReception(['5', '6', '4', '20']
); */