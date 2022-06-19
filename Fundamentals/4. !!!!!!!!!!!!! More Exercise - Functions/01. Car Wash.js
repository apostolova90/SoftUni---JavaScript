function carWash(command) {

    let result = 0; 
    let totalSum = 0;


    for (let i = 0; i < command.length; i++) { // цикъл грижещ се за преминаване през целия цикъл
    result = command[i];

    if (result === "soap"){
        totalSum += 10;
    } else if (result === "water"){
        totalSum += totalSum * 0.20;
    } else if (result === "vacuum cleaner"){
        totalSum += totalSum * 0.25;
    } else if (result === "mud"){
        totalSum -= totalSum * 0.10;
    }

    }

    console.log(`The car is ${totalSum.toFixed(2)}% clean.`);
    
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
