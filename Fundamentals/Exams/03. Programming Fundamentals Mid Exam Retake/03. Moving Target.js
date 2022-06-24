function movingTargets(arr){
    
    let targetsArray = arr.shift().split(' ');
    let index = 0;
    let command = arr[index];
    index++;
 
    while(command !== 'End'){
        
        
        let newArr = command.split(' ');
        let operation = newArr.shift();
        let atIndex = Number(newArr.shift());
        let value = Number(newArr.shift());
 
        switch (operation) {
            case 'Shoot': // намаляме стойност на елемент от даден индекс
                if (atIndex >= 0 && atIndex < targetsArray.length) {
                    targetsArray[atIndex] -= value
                    if(targetsArray[atIndex] <= 0){
                        targetsArray.splice(atIndex, 1)
                    }
                }
                break;


            case 'Add': // ПОДПЪХВАМЕ дадена стойност СЛЕД даден индекс, без да го премахваме
            if (atIndex >= 0 && atIndex < targetsArray.length){ //проверяваме дали индекса го има
                    targetsArray.splice(atIndex, 0, value) 
                } else {
                    console.log("Invalid placement!")                
            }
                break;
                    

            case 'Strike': // МАХАМЕ ЕЛЕМНТА НА ДАДЕНАТА ПОЗИЦИЯ ЕДНО, КАКТО И ОПРЕДЕЛН БРОЙ ЕЛЕМНТИ ПРЕДИ И СЛЕД НЕГО (БРОЯ Е ДАНЕН ВЪВ ВТОРИЯ ЕЛЕМЕНТ)
                    /* targetsArray.splice(atIndex , Number(value) + Number(value));
                    targetsArray.splice(atIndex - Number(value) , Number(value)); */
                    if(atIndex + Number(value) > targetsArray.length- 1 || atIndex - Number(value) < 0){
                        console.log(`Strike missed!`) 
                    } else {
                        /* targetsArray.splice(atIndex - value, value * 2 + 1 ) */
                        targetsArray.splice(atIndex , Number(value) + Number(value));
                    targetsArray.splice(atIndex - Number(value) , Number(value));
                    }  
                break;
            
        }
        
        command = arr[index];
        index++;
 
    }
    console.log(targetsArray.join('|'))
}
movingTargets(["52 74 23 44 96 110","Shoot 5 10","Shoot 1 80","Strike 2 1","Add 22 3","End"]);
console.log('-----------------------')
movingTargets(["1 2 3 4 5","Strike 0 1","End"]);













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