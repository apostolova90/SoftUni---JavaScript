function movieDay(input) {

    const timeForRecording = Number(input[0]);
    const numberOfScenes = Number(input[1]);
    const timeForOneScene = Number(input[2]);

    let settingTheScene = timeForRecording * 0.15;

    let totalTimeNeeded = timeForOneScene * numberOfScenes + settingTheScene;

    let difference = Math.abs(timeForRecording - totalTimeNeeded);

    if (totalTimeNeeded <= timeForRecording){
        console.log(`You managed to finish the movie on time! You have ${Math.round(difference)} minutes left!`);
    
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(difference)} minutes.`);
    
    }
}
movieDay(["120", "10", "11"]);
movieDay(["60", "15", "3"]);
