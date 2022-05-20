function footballLeague(input){
    let index = 0;
    let stadiumCapacity = Number(input[index]);
    index++;

    let countOfFans = Number(input[index]);
    index++;
 
    let A = 0; 
    let B = 0;
    let V = 0;
    let G = 0;


    for(let i = 0; i < countOfFans; i++){
    let typeOfFans = (input[index]);
    index++


    if (typeOfFans === "A"){
        A++
    } else if (typeOfFans === "B"){
        B++
    } else if (typeOfFans === "V"){
        V++
    } else if (typeOfFans === "G"){
        G++
    }
}

let aFanPercent = A / countOfFans * 100;
let bFanPercent = B / countOfFans * 100;
let vFanPercent = V / countOfFans * 100;
let gFanPercent = G / countOfFans * 100;

let fansPersantage = countOfFans / stadiumCapacity * 100;

console.log(`${aFanPercent.toFixed(2)}%`);
console.log(`${bFanPercent.toFixed(2)}%`);
console.log(`${vFanPercent.toFixed(2)}%`);
console.log(`${gFanPercent.toFixed(2)}%`);
console.log(`${fansPersantage.toFixed(2)}%`);

}
footballLeague(["76","10","A","V","V","V","G","B","A","V","B","B"]);
/* logistics(["6","2","3","4","5","6","2.2"]);  */
