function pipesInPool(input){
    let poolVolume = Number(input[0]);
    let firstPipeLiters = Number(input[1]);
    let secondPipeLiters = Number(input[2]);
    let workerHoursAway = Number(input[3]);

    let waterFromFirstPipe = firstPipeLiters * workerHoursAway;
    let waterFromSecondPipe = secondPipeLiters * workerHoursAway;

    let totalLitersFromBothPipes = waterFromFirstPipe + waterFromSecondPipe;

    let persantageOfBothPipes = totalLitersFromBothPipes * 100 / poolVolume;
    let persantageOfFirstPipe = waterFromFirstPipe * 100 / totalLitersFromBothPipes;
    let persantageOfSecondPipe = waterFromSecondPipe * 100 / totalLitersFromBothPipes;

    let diffrence = Math.abs(totalLitersFromBothPipes - poolVolume)

if (poolVolume >= totalLitersFromBothPipes){
    console.log(`The pool is ${persantageOfBothPipes}% full. Pipe 1: ${persantageOfFirstPipe.toFixed(2)}%. Pipe 2: ${persantageOfSecondPipe.toFixed(2)}%.`)
} else {
    console.log(`For ${workerHoursAway} hours the pool overflows with ${diffrence.toFixed(2)} liters.`)
    }
}
pipesInPool (["1000","100","120","3"])

// важен е начина на калкулиране на процентите. Виж формулата!!!