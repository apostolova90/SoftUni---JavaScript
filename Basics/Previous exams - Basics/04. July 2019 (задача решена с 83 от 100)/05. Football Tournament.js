function tournament(input){

    let name = input[0];
    



}
tournament(["Liverpool","10","W","D","D","W","L","W","D","D","W","W"]); 
tournament(["Barcelona","7","W","D","L","L","W","W","D"]); 
tournament(["Chelsea","0"]);






































/* function tournament(input){
    
    const name = input[0];
    const numberOfGames = Number(input[1]);
    let index = 2;
    
    let w = 0;
    let d = 0;
    let l = 0;
    let points = 0;
   


    for (let i = 0; i <= numberOfGames; i++){
        if (numberOfGames === 0){
            console.log(`${name} hasn't played any games during this season.`);
            break;
        }
        let typeOfGame = input[index];
        index++

        if (typeOfGame === 'W'){
            w++;
            points += 3;
            
        } else if (typeOfGame === 'D'){
            d++;
            points += 1;
        } else if (typeOfGame === 'L'){ //КОРЕКЦИЯ! Смяна на else с else if, защото отброяваше една загуба отгоре
            l++;
        }

        
    }

    let gamesWonPercentage = (w / numberOfGames * 100).toFixed(2);

    if (numberOfGames > 0 ) { // трябва да е в if функция, иначе при невалиден брой мачове принтира и този лог
    console.log(`${name} has won ${points} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${w}`);
    console.log(`## D: ${d}`);
    console.log(`## L: ${l}`);
    console.log(`Win rate: ${gamesWonPercentage}%`);
    }

}
tournament(["Liverpool","10","W","D","D","W","L","W","D","D","W","W"]); 
tournament(["Barcelona","7","W","D","L","L","W","W","D"]); 
tournament(["Chelsea","0"]); */