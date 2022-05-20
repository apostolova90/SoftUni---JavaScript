function gameShop(input){
    let index = 1;
    let numberOfGames = Number(input[0]);
    let gameName = 0;
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let other = 0;


    for(let i = 0; i < numberOfGames; i++){
        gameName = input[index];
        index++

        if (gameName === "Hearthstone"){
            hearthstone++
        } else if (gameName === "Fornite"){
            fornite++;
        } else if (gameName === "Overwatch"){
            overwatch++;
        } else {
            other++
        }

    }

    let hearthstonePercentage = hearthstone / numberOfGames * 100;
    let fornitePercentage = fornite / numberOfGames * 100;
    let overwatchPercentage = overwatch / numberOfGames * 100;
    let otherPercentage = other / numberOfGames * 100;

    console.log(`Hearthstone - ${hearthstonePercentage.toFixed(2)}%`);
    console.log(`Fornite - ${fornitePercentage.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchPercentage.toFixed(2)}%`);
    console.log(`Others - ${otherPercentage.toFixed(2)}%`);
}
gameShop(["4","Hearthstone","Fornite","Overwatch","Counter-Strike"]);