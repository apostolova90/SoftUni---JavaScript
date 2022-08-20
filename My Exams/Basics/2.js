function braceletStand(input) {

    let numberOfDays = 5;

    const pocketMoney = Number(input[0]);
    const moneyEarned = Number(input[1]);
    const costsPerPeriod = Number(input[2]);

    const presentPrice = Number(input[3]);

    let totalMoneyPocketEarned = numberOfDays * (pocketMoney + moneyEarned);
    let moneyAfterCosts = totalMoneyPocketEarned - costsPerPeriod;

    let difference = Math.abs(presentPrice - moneyAfterCosts);

    if (presentPrice <= moneyAfterCosts){
        console.log (`Profit: ${moneyAfterCosts.toFixed(2)} BGN, the gift has been purchased.`)
    } else {
        console.log (`Insufficient money: ${difference.toFixed(2)} BGN.`)
    }
}
braceletStand(["5.12", "32.05", "15", "150"]);
braceletStand(["2.10", "17.50", "20.20", "148.50"]);
braceletStand(["15.20", "200.00", "7.30", "1500.12"]);
