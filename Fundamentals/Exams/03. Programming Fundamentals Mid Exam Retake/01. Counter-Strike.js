function counterStrike(arr) {
    let energy = arr.shift()
    let counter = 0
   
    for (let index = 0; index < arr.length; index++) {
      const command = arr[index]
      if (command !== 'End of battle') {
        let point = Number(command)
        if (energy >= point) {
          energy -= point
          counter++
          if (counter % 3 == 0) {
            energy += counter
          }
        } else {
          console.log(
            `Not enough energy! Game ends with ${counter} won battles and ${energy} energy`,
          )
          break
        }
      } else {
        console.log(`Won battles: ${counter}. Energy left: ${energy}`)
      }
    }
  }
  counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
  counterStrike(["200", "54", "14", "28", "13", "End of battle"])





/* 70/100 

function counterStrike(arr) {

    let index = 1;
    let energy = arr[0];
    let command = arr[index];
    index++;
    

    let counter = 0;


    while (command !== "End of battle"){
        let point = Number(command)

        if (energy > poin){
            energy -= point
            counter ++
            if (counter % 3 === 0){
                energy += counter

            }
        } else {
            console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`)
            break;
        }
        command = arr[index];
        index++;  
        
        }

        if (command === "End of battle"){
            console.log(`Won battles: ${counter}. Energy left: ${energy}`)
    }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);*/