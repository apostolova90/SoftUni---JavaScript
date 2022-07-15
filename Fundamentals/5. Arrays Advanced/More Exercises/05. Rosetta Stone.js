
/* ДРУГ */

function rosettaStone(arr) {
    let n = Number(arr.shift());
    let templateMatrix = [];
    let encodedMessageMatrix = [];

    for (let i = 0; i < n; i++) {
        let rowOfTemplateMatrix = arr.shift().split(' ').map(Number);
        templateMatrix.push(rowOfTemplateMatrix);
    }

    for (let i = 0; i < arr.length; i++) {
        let rowOfEncodedMatrix = arr[i].split(' ').map(Number);
        encodedMessageMatrix.push(rowOfEncodedMatrix);
    }

    for (let row = 0; row < encodedMessageMatrix.length; row++) {

        for (let col = 0; col < encodedMessageMatrix[row].length; col++) {
            encodedMessageMatrix[row][col] += templateMatrix[row % n][col % templateMatrix[0].length];
        }
    }
    let message = '';

    for (let row = 0; row < encodedMessageMatrix.length; row++) {

        for (let col = 0; col < encodedMessageMatrix[row].length; col++) {
            let currentLetter = '';
            let currentElementAsNumber = encodedMessageMatrix[row][col] % 27;

            if (currentElementAsNumber == 0) {
                currentLetter = ' ';
            } else {
                currentLetter = String.fromCharCode(currentElementAsNumber + 64);
            }

            message += currentLetter;
        }
    }
    console.log(message);
}
rosettaStone(['2',
    '31 32',
    '74 37',
    '19 0 23 25',
    '22 3 12 17',
    '5 9 23 11',
    '12 18 10 22']
);