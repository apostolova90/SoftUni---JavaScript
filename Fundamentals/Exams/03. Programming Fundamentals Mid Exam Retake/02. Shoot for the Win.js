
/* мое решение  */

function shootForTheWin(arr) {
    let targetsArray = arr.shift().split(" ").map(Number);
    let targetsShot = 0;
    let previousValue = 0;
    let index = 0;
    let command = arr[index];
    index++;
   
    while (command !== "End") {
      let shots = Number(command);
      if (targetsArray.includes(targetsArray[shots])) {
        targetsShot++;
        previousValue = targetsArray[shots];
        targetsArray.splice(shots, 1, -1);
        for (let i = 0; i < targetsArray.length; i++) {
          if (targetsArray[i] !== -1 && targetsArray[i] <= previousValue) {
            targetsArray[i] += previousValue;
          } else if (targetsArray[i] > 0 && targetsArray[i] > previousValue) {
            targetsArray[i] -= previousValue;
          }
        }
      }
   
      command = arr[index];
      index++;
    }
   
    console.log(`Shot targets: ${targetsShot} -> ${targetsArray.join(" ")}`);
  }
  shootForTheWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
   
  console.log("-----------------");
   
  shootForTheWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);




















/* Another: 
function shootForTheWin(arr) {
    // create initial array and counter
      let targets = arr.shift().split(' ').map(Number);
    let shotTargets = 0
   
    // loop the indexes
      while (arr[0] !== 'End') {
          const index = Number(arr.shift());
   
      // if there is such target on the given index
          if (targets.includes(targets[index])) {
              const value = targets[index];
              targets[index] = -1;
        shotTargets++
   
        // implementing the increase - reduce logic
              for (let i = 0; i < targets.length; i++) {
                  if (targets[i] !== -1) {
                      if (targets[i] > value) {
                          targets[i] -= value;
                      } else if (targets[i] <= value) {
                          targets[i] += value;
                      }
                  }
              }
          }
      }
   
    // print the output
    console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ")}`);
  }
  shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]); */










/* Another: 

function shootForTheWin(arr){
    let targets = arr.shift().split(' ').map(Number);
    let index = 0;
    let command = arr[index];
    index++;
    let maxIndex = targets.length - 1;
 
    let counter = 0;
 
 
    while (command !== 'End'){
       let indexToBeShot = Number(command);
       let currentNum = targets[indexToBeShot];
       if (indexToBeShot <= maxIndex && indexToBeShot >= 0){
           targets[indexToBeShot] = -1;
           for (let i = 0; i < targets.length; i++){
               if (currentNum >= targets[i]){
                   if (targets[i] == -1){
                       continue;
                   }
                targets[i] += currentNum;
 
               } else {
                   if (targets[i] == -1){
                       continue;;
                   }
                targets[i] -= currentNum;
 
               }
           }
    }
    command = arr[index];
    index++;
    }
    for (let el of targets){
        if (el == -1){
            counter++;
        }
    }
    console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`)
}
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);
 */









/* Another: 

function shootForTheWin(input){
    let targets = input.shift().split(' ').map(Number);
    let count = 0;
    let command = input.shift();
 
    while(command !== "End"){
        let indexOfTheTarget = Number.parseInt(command);
 
        if(indexOfTheTarget >= 0 && indexOfTheTarget < targets.length){
            for(let i = 0; i < targets.length; i++){
                let currentTarget = targets[indexOfTheTarget];
 
                if(i !== indexOfTheTarget && targets[i] !== -1){
                    if(targets[i] > currentTarget){
                        targets[i] -= currentTarget;
                    }else{
                        targets[i] += currentTarget
                    }
                }
            }
            targets[indexOfTheTarget] = -1;
            count++;
        }
        command = input.shift();
    }
    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`)
} */











/* Another one:

function shootForTheWin(input) {
    let index = 0;
    let sequence = input[index++].split(' ').map(Number);
    let command = input[index++];
    let shotTargets = 0;

    while (command != 'End') {
        let indexOfTarget = Number(command);

        if (indexOfTarget > sequence.length - 1 || indexOfTarget < 0 || sequence[indexOfTarget] == -1) {
            command = input[index++];
            continue;
        }

        for (let i = 0; i < sequence.length; i++) {
            if (indexOfTarget == i || sequence[i] == -1) {
                continue;
            }
            if (sequence[i] > sequence[indexOfTarget]) {
                sequence[i] -= sequence[indexOfTarget];
            } else {
                sequence[i] += sequence[indexOfTarget];
            }
        }
        shotTargets++;
        sequence[indexOfTarget] = -1;
        command = input[index++];
    }
    console.log(`Shot targets: ${shotTargets} -> ${sequence.join(' ')}`);
}
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]); */