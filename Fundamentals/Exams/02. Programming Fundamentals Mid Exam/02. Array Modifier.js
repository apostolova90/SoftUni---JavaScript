
/* ИЗЦЯЛО МОЕ РЕШЕНИЕ */


function arrayMod(arr) {

    let workingArray = arr.shift().split(' ').map(Number);      //отделяме масива върху, които ще работил
    let index = 0;
    let line = arr[index];

    while (line != 'end') {
        line = arr[index];

        let commandAsArr = (line).split(' ');
        let commandToFollow = commandAsArr[0]
        let x = Number(commandAsArr[1]);    //казваме на програмата да намери и запише под х, числото, което се намира под дадена позиция
        let y = Number(commandAsArr[2]);     // (задаваме така отделните елемeнти, а не като масив, защото трябва да придвидим че "line" може да бъде и само 1 дума)
            
        let temp = 0

        if (commandToFollow === 'swap'){    //КОГАТО ИСКАМЕ ДА РАЗМЕНИМ МЕСТАТА НА ДВЕ ПОЗИЦИИ
            temp = workingArray[x];
            workingArray[x] = workingArray[y]
            workingArray[y] = temp
        } else if (commandToFollow === 'multiply'){  //КОГАТО ИСКАМЕ ДА УМНОЖИМ ЧИСЛОТО НА ПЪРВА ПОЗИЦИЯ, С ЧИСЛОТО ОТ ВТОРА ПОЗИЦИЯ
            let o = Number(commandAsArr[1]);    
            let j = Number(commandAsArr[2]);     
            temp = workingArray[o] * workingArray[j]; 
            workingArray[x] = temp
        } else if (commandToFollow === 'decrease'){  // КОГАТО ИСКАМЕ ДА ИЗВАДИМ ЧИСЛО ОТ ВСЯКО ЧИСЛО В МАСИВА
            workingArray = workingArray.map((el)=>{               //arrow function който минава през всички елемЕнти 
                return el - 1                                  // и казва на програмата да извади 1 от всяко число
                })
                
        }
        index++

    }
    console.log(workingArray.join(', '))

} 
arrayMod([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
])

arrayMod([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
])





/* 
Another:


function arrayMod(arr) {
    let str = arr.shift()
    let workArr = str.split(' ')
    let index = 0
    let command = arr[index];
    while (command !== 'end') {
 
        command = arr[index];
 
        let inputArr = command.split(' ');
        let mods = inputArr[0];
        let indexOne = inputArr[1];
        let indexTwo = inputArr[2];
 
        let temp = 0
        if (mods == 'swap') {
            temp = workArr[indexOne];
            workArr[indexOne] = workArr[indexTwo];
            workArr[indexTwo] = temp;
        } else if (mods == 'multiply') {
            temp = Number(workArr[indexOne]) * Number(workArr[indexTwo]);
            workArr[indexOne] = temp;
        } else if (mods == 'decrease') {
            for (let i = 0; i < workArr.length; i++) {
                temp = Number(workArr[i]) - 1;
                workArr[i] = temp;
            }
        }
 
        index++;
    }
    console.log(workArr.join(', '))
 
} 
arrayMod([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
])

arrayMod([
  '1 2 3 4',
  'swap 0 1',
  'swap 1 2',
  'swap 2 3',
  'multiply 1 2',
  'decrease',
  'end'
]
)
 */






/* 
Another:

function arrayModifier(input) {

    let arr = input.shift().split(' ').map(Number);
    let command = (input.shift());

    while (command != 'end') {
        let commandAsArr = (command).split(' ');

        if (commandAsArr[0] == 'swap') {
            let x = Number(commandAsArr[1]);
            let y = Number(commandAsArr[2]);
            let temp = arr[x];
            arr[x] = arr[y];
            arr[y] = temp;
        } else if (commandAsArr[0] == 'multiply') {
            let x = Number(commandAsArr[1]);
            let y = Number(commandAsArr[2]);
            let multiply = arr[x] * arr[y];
            arr[x] = multiply;
        } else if (commandAsArr[0] == 'decrease') {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i] - 1;
            }
        }
        command = String(input.shift());
    }
    console.log(arr.join(', '));
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
); */