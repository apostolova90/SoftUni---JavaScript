50/100


function theLift(array){


    let peopleWaiting = parseInt(array.shift()) // отделяме първия елемнт от масива, в отделен елемнт, който не е масив
    let arrayOfAllwagons  = array[0].split(" ").map(Number); // от това ['0 0 0 0'] става това [0, 0, 0, 0]

    let numberOfWagons = arrayOfAllwagons.length;
    let alreadyTakenSpacesInTheTrain = 0;


    for (let numbers of arrayOfAllwagons) {
        alreadyTakenSpacesInTheTrain += numbers  // заети места във влака, общо от всички вагони
    }

    let freeSpacesInTheTrain = (numberOfWagons * 4) - alreadyTakenSpacesInTheTrain;
    let spaceDiff = freeSpacesInTheTrain - peopleWaiting

    let newArray = []
    for (let i = 0; i < numberOfWagons; i++) {

        
        let spaceInCurrentWagon = 4 - arrayOfAllwagons[i]
            peopleWaiting -= spaceInCurrentWagon

            let takenPlacesInEachWagon = spaceInCurrentWagon + arrayOfAllwagons[i]
            newArray.push(takenPlacesInEachWagon)

            if (peopleWaiting <= 4){
            newArray.push(peopleWaiting);
            break;
        }
        }

    
        if (spaceDiff <= 0){
            console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`)
            console.log(`${newArray.join(' ')}`)
        } else {
            console.log("The lift has empty spots!")
            console.log(`${newArray.join(' ')}`)
        }

}
theLift([
    "15",
    "0 0 0 0"
   ])
   
theLift([
    "20",
    "0 2 0"
   ])
