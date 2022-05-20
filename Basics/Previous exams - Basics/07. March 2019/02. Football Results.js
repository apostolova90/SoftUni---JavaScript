function footballResults(input){

    let game1 = "" + input[0];
    let game2 = "" + input[1];
    let game3 = "" + input[2];

    let wins = 0;
    let looses = 0;
    let drawn = 0;
    
    let resultAgame1 = Number(game1[0]);
    let resultBgame1 = Number(game1[2]);
    let resultAgame2 = Number(game2[0]);
    let resultBgame2 = Number(game2[2]);
    let resultAgame3 = Number(game3[0]);
    let resultBgame3 = Number(game3[2]);


    if (resultAgame1 > resultBgame1){
        wins++
    } else if (resultAgame1 < resultBgame1){
        looses++
    }  else if (resultAgame1 = resultBgame1) {
        drawn++ 
    }


    if (resultAgame2 > resultBgame2){
        wins++
    } else if (resultAgame2 < resultBgame2){
        looses++
    } else if (resultAgame2 = resultBgame2) {
        drawn++ 
    }


    if (resultAgame3 > resultBgame3){
        wins++
    } else if (resultAgame3 < resultBgame3){
        looses++
    } else if (resultAgame3 === resultBgame3){
        drawn++ 
    }
    console.log (`Team won ${wins} games.`)
    console.log (`Team lost ${looses} games.`)
    console.log (`Drawn games: ${drawn}`)
    
}
footballResults(["3:1","0:2","0:0"]);
/* footballResults(["4:2","0:3","1:0"]);
footballResults(["0:2","0:1","3:3"]); */