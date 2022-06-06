function dishwasher(input){
    const detergentBottles = Number(input[0]);
    let detergentLitters = detergentBottles * 750;
    const littersPlate = 5;
    const littersPot = 15;
    let platesWashed = 0;
    let potsWashed = 0;
 
    let index = 1;
    let command = input[index];
 
 while(command !== "End"){
    let forWashing = Number(command);
    
    if (index % 3 === 0){
        platesWashed += forWashing;
        forWashing *= littersPot;
        detergentLitters = detergentLitters - forWashing;
 
    } else {
        potsWashed += forWashing;
        forWashing *= littersPlate;
        detergentLitters = detergentLitters - forWashing;
    }
    if (detergentLitters < 0) {
        console.log (`Not enough detergent, ${Math.abs(detergentLitters)} ml. more necessary!`);
        break;
    }  
    index++;
    command = input[index];
    }
 
    if (detergentLitters >=0) {
        console.log ("Detergent was enough!");
        console.log (`${potsWashed} dishes and ${platesWashed} pots were washed.`);
        console.log (`Leftover detergent ${detergentLitters} ml.`);
    } 
}
dishwasher(["2","53","65","55","End"]);
dishwasher(["1","10","15","10","12","13","30"]);