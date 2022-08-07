function lunchBreak(input){
    let movieName = input[0];
    let movieDuration = Number(input[1]);
    let breakDuration = Number(input[2]);
    
    let lunchTime = breakDuration / 8;
    let breakTime = breakDuration / 4;
    let timeLeft = breakDuration - lunchTime - breakTime

    let diffrence = Math.abs(movieDuration - timeLeft);

if (timeLeft >= movieDuration){
    console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(diffrence)} minutes free time.`)
}else{
    console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(diffrence)} more minutes.`)
    }
}
lunchBreak (["Teen Wolf",
"48",
"60"]);

