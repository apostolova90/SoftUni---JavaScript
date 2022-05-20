function easterShop(input){

    let startingEggs = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++

    let selledEggs = 0;
 

    while (command !== "Close"){
 
        let numberOfEggs = Number(input[index]);
        index++;

        if (command === "Buy" && numberOfEggs > startingEggs){
            console.log("Not enough eggs in store!");
            console.log(`You can buy only ${startingEggs}.`)
            break;
        }

        if (command === "Buy"){
            startingEggs -= numberOfEggs;
            selledEggs += numberOfEggs;
        } else if (command === "Fill"){
            startingEggs += numberOfEggs;
    }

    command= input[index];
    index++

    }

    if (command === "Close"){
        console.log("Store is closed!");
        console.log(`${selledEggs} eggs sold.`)

    }
}
easterShop(["13","Buy","8","Fill","3","Buy","10"]);
easterShop(["20","Fill","30","Buy","15","Buy","20","Close"]);








/* вариант с input.length */





/* function easterShop(input) {
    index = 0;
    let eggs = Number(input[index]);
    index++;

    let soldEggs = 0;

    for (let i = 0; i < input.length / 2; i++){
        let action = input[index];
        index++;
        let numberOfEggs = Number(input[index]);
        index++;
   
    if (action != "Stop" && eggs >= numberOfEggs){
        switch (action){
            case "Buy":
            eggs = eggs - numberOfEggs;
            soldEggs += numberOfEggs;
            break;
            case "Fill":
            eggs = eggs + numberOfEggs;
            break;
        }
    } else if (action != "Stop" && eggs < numberOfEggs){
        switch (action){
            case "Buy":
            console.log(`Not enough eggs in store!`);
            console.log(`You can buy only ${eggs}.`);
            break;
            case "Fill":
            eggs = eggs + numberOfEggs;
            break;
        }
    } else if (action === "Close"){
            console.log(`Store is closed!`);
            console.log(`${soldEggs} eggs sold.`)
        }
    }  
}
easterShop(["13", "Buy", "8", "Fill", "3", "Buy", "10"]);
easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);
 */