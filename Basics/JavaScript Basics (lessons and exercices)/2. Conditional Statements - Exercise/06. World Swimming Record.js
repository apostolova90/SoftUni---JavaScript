function worldSwimmingRecord(Input){
    let recordInSeconds = Number(Input[0]);
    let distanceInMeeters = Number(Input[1]);
    let secondsForOneMeeter = Number(Input[2]);

    let timeIvanNeedsForDistance = distanceInMeeters * secondsForOneMeeter;
    let extraTime = Math.floor(distanceInMeeters / 15) * 12.5; 
    let totalTimeNeeded = timeIvanNeedsForDistance + extraTime

    let difference = Math.abs(recordInSeconds - totalTimeNeeded);

    if (totalTimeNeeded < recordInSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalTimeNeeded.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`);
    }
    
}

worldSwimmingRecord (["55555.67","3017","5.03"]);

