function firmProject(input){

    let hoursNeeded = Number(input[0]);
    let daysTheyHave = Number(input[1]);
    let numberOfWorkers = Number(input[2]);

    let daysForWork = daysTheyHave * 0.90;
    let hoursForWork = daysForWork * 8
    let overTimeWorkInHours = numberOfWorkers * (daysTheyHave * 2)
    let totalHoursOfWork = Math.floor(hoursForWork + overTimeWorkInHours);

    let diffrence = Math.abs(hoursNeeded - totalHoursOfWork);

if (hoursNeeded <= totalHoursOfWork) {
    console.log (`Yes!${diffrence} hours left.`)
} else if (hoursNeeded > totalHoursOfWork) {
    console.log (`Not enough time!${diffrence} hours needed.`)
    }
}
firmProject (["90","7","3"]);
 