/* решена с Ивайло при подготовка */

function theLift(input) {
 
  let passengers = Number(input.shift());
  let wagons = input.shift().split(' ').map(Number);
  let wagonsLength = wagons.length;

 if(passengers){
  for (let i = 0; i < wagonsLength; i++) {

      let currentWagon = wagons[i];

      while (currentWagon !== 4) {
          currentWagon++;
          passengers--;
          if (passengers === 0) {
              break;
          }
      }
      wagons[i] = currentWagon;
      if (passengers === 0) {
          break;
      }
  }

  let isFull = wagons.filter(w => w !== 4);

  if (isFull.length === 0 && passengers === 0) {
      console.log(wagons.join(' '));
  } else if (isFull.length !== 0) {
      console.log('The lift has empty spots!');
      console.log(wagons.join(' '));
  } else {
      console.log(`There isn't enough space! ${passengers} people in a queue!`);
      console.log(wagons.join(' '));
  }
 }
}
theLift(["15", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);
theLift(["15", "0 0 0 0 0"]);
theLift(["13", "0 3 0 4 0"]);




/* Another  

function theLift(arr) {

  let waitingPeople = Number(arr.shift());
  const wagons = arr.shift().split(" ").map(Number);

  for (let i = 0; i < wagons.length; i++) {
    while (wagons[i] < 4 && waitingPeople > 0) {
      wagons[i]++;
      waitingPeople--;
    }
  }
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
theLift(["13", "0 3 0 4 0"]); */







/* Anothner:
function theLift(input) {
    let peopleInTheQueue = Number(input.shift());
    let lift = input.shift().split(' ').map(Number);

    let peopleInTheLiftBeforeStart = 0;
    for (let people of lift) {
        peopleInTheLiftBeforeStart += people;
    }
    let freeSeatsBeforeStart = (lift.length * 4) - peopleInTheLiftBeforeStart;

    let wagon = 0;
    let newPassengers = 0;

    for (let i = 0; i < peopleInTheQueue; i++) {
        if (lift[wagon] == 4 && wagon < lift.length - 1) {
            wagon++;
        }
        if (lift[wagon] < 4 && wagon <= lift.length - 1) {
            lift[wagon] += 1;
            newPassengers++;
        }
    }

    if (peopleInTheQueue > freeSeatsBeforeStart) {
        console.log(`There isn't enough space! ${peopleInTheQueue - freeSeatsBeforeStart} people in a queue!\n${lift.join(' ')}`);
    } else if (peopleInTheQueue == freeSeatsBeforeStart) {
        console.log(lift.join(' '));
    } else if (peopleInTheQueue < freeSeatsBeforeStart) {
        console.log(`The lift has empty spots!\n${lift.join(' ')}`);
    }
}
theLift([
    "20",
    "0 2 0"
]
); */






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
