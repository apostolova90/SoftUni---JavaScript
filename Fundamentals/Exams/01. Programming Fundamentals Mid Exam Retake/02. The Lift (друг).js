/* function lift(array) {
    let peopleWaiting = parseInt(array.shift());
    let momentumArrayOfFilledSpaces = array[0].split(" ").map(Number);
    let numberOfWagons = momentumArrayOfFilledSpaces.length;
    let spaceInCurrentTrain = 0;
 
    for (let numbers of momentumArrayOfFilledSpaces) {
        spaceInCurrentTrain += numbers
    }
 
    let totalSpace = (numberOfWagons * 4) - spaceInCurrentTrain;
    let spaceDiff = peopleWaiting - totalSpace
 
    for (let index = 0; index < numberOfWagons; index++) {
        while (momentumArrayOfFilledSpaces[index] < 4 && peopleWaiting > 0) {
            let remain = 4 - momentumArrayOfFilledSpaces[index];
            if (peopleWaiting <= 4) {
                let currentRemainingSpaces = peopleWaiting + momentumArrayOfFilledSpaces[index];
                if (currentRemainingSpaces <= 4) {
                    momentumArrayOfFilledSpaces[index] = currentRemainingSpaces;
                    peopleWaiting -= remain
                } else {
                    momentumArrayOfFilledSpaces[index] = 4;
                    peopleWaiting -= remain;
                }
 
            } else {
                momentumArrayOfFilledSpaces[index] = remain + momentumArrayOfFilledSpaces[index];
                peopleWaiting -= remain;
            }
 
        }
    }
 
    if (spaceDiff == 0) {
        console.log(momentumArrayOfFilledSpaces.join(" "))
    } else if (spaceDiff < 0) {
        console.log('The lift has empty spots!');
        console.log(momentumArrayOfFilledSpaces.join(" "))
    } else {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(momentumArrayOfFilledSpaces.join(" "))
    }
 
} */

.............