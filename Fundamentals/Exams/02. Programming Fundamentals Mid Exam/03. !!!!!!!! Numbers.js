..............













/* 
Another:

function numbers(sequence) {
    sequence = sequence.split(' ').map(Number);
    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }
    let avg = sum / sequence.length;

    let topFive = [];

    sequence = sequence.sort((a, b) => b - a)
    for (let i = 0; i < 5; i++) {
        if (sequence[i] > avg) {
            topFive.push(sequence[i]);
        }
    }
    if (topFive.length > 0) {
        console.log(topFive.join(' '));
    } else {
        console.log('No');
    }
}
numbers('1'); */