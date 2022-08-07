function trekkingMania(input){

    let index = 0;
    let count = Number(input[index]);
    index++

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let total = 0;

for(let i = 0; i < count; i++){   
    let countPeople = Number(input[index]);
    index++
    total += countPeople 

    if (countPeople <=5){
        musala += countPeople
    } else if (countPeople >= 6 && countPeople <= 12){
        monblan += countPeople;
    } else if (countPeople >= 13 && countPeople <= 25){
        kilimandjaro += countPeople
    } else if (countPeople >= 26 && countPeople <= 40){
        k2 += countPeople;
    } else {
        everest += countPeople;
    }
}
    let musalaProcentage = musala / total * 100;
    let monblanProcentage = monblan / total * 100;
    let kilimandjaroProcentage = kilimandjaro / total * 100;
    let k2Procentage = k2 / total * 100;
    let everestProcentage = everest / total * 100;

console.log(`${musalaProcentage.toFixed(2)}%`);
console.log(`${monblanProcentage.toFixed(2)}%`);
console.log(`${kilimandjaroProcentage.toFixed(2)}%`);
console.log(`${k2Procentage.toFixed(2)}%`);
console.log(`${everestProcentage.toFixed(2)}%`);

}

trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"]);