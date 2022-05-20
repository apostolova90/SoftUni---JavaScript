function bills(input){
    let index = 0;
    let countOfMonths = Number(input[index]);
    index++;
 
    let waterPerMonth = 20;
    let totalWater = countOfMonths * waterPerMonth;

    let internetPerMonth = 15;
    let totalInternet = countOfMonths * internetPerMonth;

    let totalElecticity = 0; 

    for(let i = 0; i < countOfMonths; i++){
    let electricityPerMonth = Number(input[index]);
    index++
    totalElecticity += electricityPerMonth;

    }  

    let totalWaterInternetElectrisity = totalElecticity + totalWater + totalInternet;
    let otherBills = totalWaterInternetElectrisity + (totalWaterInternetElectrisity * 0.20);

    let average = (totalWaterInternetElectrisity + otherBills) / countOfMonths;
    console.log (`Electricity: ${totalElecticity.toFixed(2)} lv`);
    console.log (`Water: ${totalWater.toFixed(2)} lv`);
    console.log (`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log (`Other: ${otherBills.toFixed(2)} lv`);
    console.log (`Average: ${average.toFixed(2)} lv`);

} 
bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);