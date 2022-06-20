function counterStrike(arr) {
  let energy = arr.shift();
  let counter = 0;

  for (let index = 0; index < arr.length; index++) {
    const command = arr[index];
    if (command !== "End of battle") {
      let point = Number(command);
      if (energy >= point) {
        energy -= point;
        counter++;
        if (counter % 3 == 0) {
          energy += counter;
        }
      } else {
        console.log(
          `Not enough energy! Game ends with ${counter} won battles and ${energy} energy`
        );
        break;
      }
    } else {
      console.log(`Won battles: ${counter}. Energy left: ${energy}`);
    }
  }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);








/* Another: function counterStrike(input) {
  let index = 0;
  let energy = Number(input[index++]);
  let win = 0;
  let isEnoughEnergy = true;

  for (let battle = 1; battle < input.length; battle++) {
    let command = input[index++];

    if (command == "End of battle") {
      break;
    }

    let distance = Number(command);

    if (distance > energy) {
      isEnoughEnergy = false;
      console.log(
        `Not enough energy! Game ends with ${win} won battles and ${energy} energy`
      );
      break;
    } else {
      energy -= distance;
      win++;
    }
    if (win % 3 == 0) {
      energy += win;
    }
  }
  if (isEnoughEnergy) {
    console.log(`Won battles: ${win}. Energy left: ${energy}`);
  }
}
counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
 */