function mountainRun(input) {
    const worldRecordInSeconds = Number(input[0]);
    const distanceInMeters = Number(input[1]);
    const timeInSecondsPerMeter = Number(input[2]);

    const delayInSeconds =(Math.floor(distanceInMeters / 50)) * 30;

    const climbInSeconds = distanceInMeters * timeInSecondsPerMeter
    const climbTotalTime = climbInSeconds + delayInSeconds;
    const difference = Math.abs(worldRecordInSeconds - climbTotalTime);

    if (climbTotalTime < worldRecordInSeconds) {
        console.log (`Yes! The new record is ${climbTotalTime.toFixed(2)} seconds.`)
    } else {
        console.log (`No! He was ${difference.toFixed(2)} seconds slower.`)
    }

}
/* mountainRun(["10164", "1400", "25"]);
mountainRun(["5554.36", "1340", "3.23"]); */
mountainRun(["1377", "389", "3"]);