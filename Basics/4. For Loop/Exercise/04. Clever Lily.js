function cleverLily(input) {
const age = Number(input[0]);
const priceWashingMachine = Number(input[1]);
const toyPrice = Number(input[2]);

let tempMoney = 10;
let money = 0;
let toycounter = 0;


for(let i = 1; i <= age; i++){
    if (i % 2 === 0){
        money += tempMoney;
        tempMoney += 10;
        money -= 1;
    }  else {
        toycounter++;
    }
} 

    money += toycounter * toyPrice;
    let difference = Math.abs(money - priceWashingMachine);
    if (money >= priceWashingMachine){
        console.log(`Yes! ${difference.toFixed(2)}`)
    } else {
        console.log (`No! ${difference.toFixed(2)}`);
    }
    
        } 
cleverLily(["10", "170.00", "6"]);
