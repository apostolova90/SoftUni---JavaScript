function clud(input){

    let index =0;

    let target = Number(input[index]);
    index++
    let cocktailName = input[index];
    index++
    let cocktailNumber = 0;
    let profitCocktailOrder = 0;
    let profit = 0;

    while(cocktailName !== "Party!"){
        cocktailNumber = Number(input[index]);
        index++
        let coctailPrice = cocktailName.length;

        profitCocktailOrder = cocktailNumber * coctailPrice;
   

        if (profitCocktailOrder % 2 !== 0){
            profitCocktailOrder *= 0.75;
        }

        profit += profitCocktailOrder;
        target -= profitCocktailOrder;

        if (target <= 0){
            console.log("Target acquired.");
            console.log(`Club income - ${profit.toFixed(2)} leva.`);
            break;
        }


        cocktailName = input[index];
        index++
        if (cocktailName === "Party!"){
            console.log(`We need ${target.toFixed(2)} leva more.`);
            console.log(`Club income - ${profit.toFixed(2)} leva.`);
            break;
        }
    }
}
clud(["500","Bellini","6","Bamboo","7","Party!"]);
clud(["100","Sidecar","7","Mojito","5","White Russian","10"]);



















/* function club(input) {
    let index = 0;

    let wantedMoney = Number(input[index]);
    index++

    let clubIncome = 0;
    let coctailPrice = 0;

    
    for (let i = 0; i < input.length / 2 ; i++){

        let cocktailName = input[index];
        index++
        let numberOfCocktails = Number(input[index]);
        index++

        coctailPrice = cocktailName.length;

        if (cocktailName === "Party!"){
            let neededMoney = wantedMoney - clubIncome;
            console.log(`We need ${neededMoney.toFixed(2)} leva more.`)
            console.log(`Club income - ${clubIncome.toFixed(2)} leva.`);
            break;
        }

        let tempMoney = numberOfCocktails * coctailPrice;    

        if (tempMoney % 2 !== 0) {
            tempMoney *= 0.75;
        }
        
        clubIncome += tempMoney;
        

        if (wantedMoney <= clubIncome){
            console.log("Target acquired.")
            console.log(`Club income - ${clubIncome.toFixed(2)} leva.`);
            break;
        }
    }
}
club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]); */