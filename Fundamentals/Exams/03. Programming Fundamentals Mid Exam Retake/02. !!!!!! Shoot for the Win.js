друг..............

/* function shootForTheWin(input){
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