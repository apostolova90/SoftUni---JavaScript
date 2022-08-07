function sumSeconds(input){
    let firstTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);

    let totalTime = firstTime + secondTime + thirdTime;
    let hours = Math.floor(totalTime / 60);
    let minutes = totalTime % 60;

if (minutes < 10){
    console.log (`${hours}:0${minutes}`)
    } else {
    console.log (`${hours}:${minutes}`)
    }
}
sumSeconds (["35","45","44"]);
