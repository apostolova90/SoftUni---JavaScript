/* друг  */

function theLift(arr) {
  // create init values
  let waitingPeople = Number(arr.shift());
  const wagons = arr.shift().split(" ").map(Number);

  // implement the logic of each wagon
  for (let i = 0; i < wagons.length; i++) {
    while (wagons[i] < 4 && waitingPeople > 0) {
      wagons[i]++;
      waitingPeople--;
    }
  }

  // print the output
  for (const wagon of wagons) {
    if (wagon < 4) {
      console.log("The lift has empty spots!");
      break;
    }
    if (waitingPeople > 0) {
      console.log(
        `There isn't enough space! ${waitingPeople} people in a queue!`
      );
      break;
    }
  }
  console.log(wagons.join(" "));
}
theLift(["15", "0 0 0 0"]);

theLift(["20", "0 2 0"]);

theLift(["15", "0 0 0 0 0"]);

theLift(["13", "0 3 0 4 0"]);

/* MOE - 85/100............


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
 */
