function balls(input) {
    let index = 0;
    let numberOfBalls = Number(input[index]);
    index++;

    let result = 0;
    let redBalls = 0; 
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherColorsBalls = 0;

    for(let i = 1; i <= numberOfBalls; i++){
    let balls = (input[index]);
    index++;

    if (balls === "red"){
        result = result + 5;
        redBalls++
    } else if (balls === "orange"){
        result = result + 10;
        orangeBalls++
    } else if (balls === "yellow"){
        result = result + 15;
        yellowBalls++
    } else if (balls === "white"){
        result = result + 20;
        whiteBalls++
    } else if (balls === "black"){
        result = Math.floor(result / 2);
        blackBalls++
    } else if (result != "red" || result !=  "orange" || result !=  "yellow" || result !=  "white" || result != "black"){
        result = result + 0;
        otherColorsBalls++
    }
    } 
    console.log(`Total points: ${result}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColorsBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);

}
balls(["3", "white", "black", "pink"]);
/* balls(["5", "red", "red", "ddd", "ddd", "ddd"]); */


