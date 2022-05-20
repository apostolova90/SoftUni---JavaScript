function easterBake(input) {

let numberOfKozunaci = Number(input[0]);
let index = 1;

let sugar = 0;
let flower = 0;
let totalUsedSugar = 0;
let totalUsedFlower = 0;
let maxSugar = Number.MIN_SAFE_INTEGER;
let maxFlower = Number.MIN_SAFE_INTEGER;


for(let i = 1; i <= numberOfKozunaci; i++) {
    let sugar = Number(input[index]);
    index++;
    let flower = Number(input[index]);
    index++

totalUsedSugar += sugar;
if (maxSugar < sugar){
    maxSugar = sugar;
}

totalUsedFlower += flower;
if (maxFlower < flower){
    maxFlower = flower;
}
    }

    let totalPackagesFlower = totalUsedFlower / 750;
    let totalPackagesSugar = totalUsedSugar / 950;

console.log(`Sugar: ${Math.ceil(totalPackagesSugar)}`);
console.log(`Flour: ${Math.ceil(totalPackagesFlower)}`);
console.log(`Max used flour is ${maxFlower} grams, max used sugar is ${maxSugar} grams.`);
}
easterBake(["3", "400", "350", "250", "300", "450", "380"]);
easterBake(["4", "500", "350", "560", "430", "600", "345", "578", "543"]);
