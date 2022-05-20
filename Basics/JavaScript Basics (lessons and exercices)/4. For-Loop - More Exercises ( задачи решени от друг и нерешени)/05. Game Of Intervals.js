function gameOfIntervals(input){
let index = 0;
let turns = Number(input[index]);
index++;

let from0to9 = 0;
let from10to19 = 0;
let from20to29 = 0;
let from30to39 = 0;
let from40to50 = 0;
let invalidNumbers = 0;

let result = 0;
let total = 0;

for(let i = 0; i < turns; i++){
let number = Number(input[index]);
index++;
total++

if (number >= 0 && number <= 9){
    result += number * 0.2; 
    from0to9++;
} else if (number >= 10 && number <= 19){
    result += number * 0.3; 
    from10to19++;
} else if (number >= 20 && number <= 29){
    result += number * 0.4; 
    from20to29++;
} else if (number >= 30 && number <= 39){
    result += 50;
    from30to39++;
} else if (number >= 40 && number <= 50){
    result += 100;
    from40to50++; 
} else if (number < 0 || number > 50){
    result /= 2;
    invalidNumbers++;
    } 
}
let percentageFrom0to9 = from0to9 / total * 100;
let percentageFrom10to19 = from10to19 / total * 100;
let percentageFrom20to29 = from20to29 / total * 100;
let percentageFrom30to39 = from30to39 / total * 100;
let percentageFrom40to50 = from40to50 / total * 100;
let percentageInvalidNumbers = invalidNumbers / total * 100;


console.log (`${result.toFixed(2)}`)
console.log (`From 0 to 9: ${percentageFrom0to9.toFixed(2)}%`);
console.log (`From 10 to 19: ${percentageFrom10to19.toFixed(2)}%`);
console.log (`From 20 to 29: ${percentageFrom20to29.toFixed(2)}%`);
console.log (`From 30 to 39: ${percentageFrom30to39.toFixed(2)}%`);
console.log (`From 40 to 50: ${percentageFrom40to50.toFixed(2)}%`);
console.log (`Invalid numbers: ${percentageInvalidNumbers.toFixed(2)}%`);

}
gameOfIntervals(["10","43","57","-12","23","12","0","50","40","30","20"]);
