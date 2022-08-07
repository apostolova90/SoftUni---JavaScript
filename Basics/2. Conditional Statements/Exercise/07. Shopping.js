function shoping(input){
    const budget = Number(input[0]);
    const numberVideocards = Number(input[1]);
    const numberProcesors = Number(input[2]);
    const numberRam = Number(input[3]);

    let videocardPrice = 250
    let procesorPrice = (videocardPrice * numberVideocards) * 0.35; 
    let ramPrice = (videocardPrice * numberVideocards) * 0.10; 

let totalPriceForAll = numberVideocards * videocardPrice + numberProcesors * procesorPrice + numberRam * ramPrice;

if (numberVideocards > numberProcesors){
    totalPriceForAll = totalPriceForAll * 0.85
}

let diffrence = Math.abs(budget - totalPriceForAll);
if (budget >= totalPriceForAll){
    console.log(`You have ${diffrence.toFixed(2)} leva left!`)

} else {
    console.log(`Not enough money! You need ${diffrence.toFixed(2)} leva more!`)

    }
}

shoping (["900","2","1","3"]);

