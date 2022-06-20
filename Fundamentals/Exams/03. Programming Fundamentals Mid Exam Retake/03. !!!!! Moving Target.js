...............


















/* 


Another:

function movingTarget(input) {
    let index = 0;
    let sequence = input[index++].split(' ').map(Number);
    let command = input[index++];

    while (command != 'End') {
        let commandAsArr = command.split(' ');
        let action = commandAsArr[0];
        let indexOfAction = Number(commandAsArr[1]);
        let valueOfAction = Number(commandAsArr[2]);

        if (indexOfAction > sequence.length - 1 || indexOfAction < 0) {
            if (action == 'Add') {
                console.log('Invalid placement!');
            }
            command = input[index++];
            continue;
        }
        if (action == 'Shoot') {
            if (sequence[indexOfAction] > valueOfAction) {
                sequence[indexOfAction] -= valueOfAction;
            } else {
                sequence.splice(indexOfAction, 1);
            }
        } else if (action == 'Add') {
            sequence.splice(indexOfAction, 0, valueOfAction);
        } else if (action == 'Strike') {
            if (indexOfAction + valueOfAction > sequence.length - 1 || indexOfAction - valueOfAction < 0) {
                console.log('Strike missed!');
                command = input[index++];
                continue;
            } else {
                sequence.splice(indexOfAction - valueOfAction, valueOfAction * 2 + 1);
            }
        }
        command = input[index++];
    }
    console.log(sequence.join('|'));
}
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]); */