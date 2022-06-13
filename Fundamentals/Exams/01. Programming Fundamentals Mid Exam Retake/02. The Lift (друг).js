function theLift(array){


    let peopleWaiting = Number(array.shift()) // отделяме първия елемнт от масива, в отделен елемнт, който не е масив
    let arrayOfAllWagons  = array.shift().split(' '); // от това ['0 0 0 0'] става това [0, 0, 0, 0]

    let numberOfWagons = arrayOfAllWagons.length;
    let totalSeatsInTheTrain = numberOfWagons * 4


    let newArrayOfWagons = []

    for(let i = 0; i < arrayOfAllWagons.length; i++){
        let currentWagon = Number(arrayOfAllWagons[i])
        let seatsAvailableInEachWagon = 4 - currentWagon
        
        if (currentWagon < 4 && peopleWaiting >= 4){
            peopleWaiting -= seatsAvailableInEachWagon
            totalSeatsInTheTrain = totalSeatsInTheTrain - (currentWagon + seatsAvailableInEachWagon)
            newArrayOfWagons.push(currentWagon + seatsAvailableInEachWagon)
        } else if (currentWagon = 4 && peopleWaiting >=4){
            newArrayOfWagons.push(4)
            totalSeatsInTheTrain = totalSeatsInTheTrain - 4
        } else if (currentWagon >= 0 && peopleWaiting <= 4){
            newArrayOfWagons.push(peopleWaiting)
            peopleWaiting -= peopleWaiting
            totalSeatsInTheTrain = totalSeatsInTheTrain - peopleWaiting
        } else {
            newArrayOfWagons.push(totalSeatsInTheTrain);
        }
        } 

    if (totalSeatsInTheTrain === 0 && peopleWaiting === 0){
        console.log(`${newArrayOfWagons.join(' ')}`) 
    } else if (totalSeatsInTheTrain < peopleWaiting){
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`)
        console.log(`${newArrayOfWagons.join(' ')}`)
    } else {
        console.log("The lift has empty spots!")
        console.log(`${newArrayOfWagons.join(' ')}`)
    }




}
theLift([
    "15",
    "0 0 0 0"
   ])
   console.log("________________")
   
theLift([
    "20",
    "0 2 0"
   ])
   console.log("________________")

   theLift([
    "15",
    "0 0 0 0 0"
   ])
   console.log("________________")

   theLift([
    "13",
    "0 3 0 4 0"
   ])
   console.log("________________")









/* 



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

   theLift([
    "15",
    "0 0 0 0 0"
   ])
 */