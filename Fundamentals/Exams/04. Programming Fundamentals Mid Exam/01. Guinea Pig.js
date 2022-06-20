function guineaPig(arr) {

let days = 30; 
let food = 1000 * arr[0];
let hay = 1000 * arr[1];
let cover = 1000 * arr[2];
let guineaWeight = 1000 * arr[3];
let dailyFood = 300;

let daycounter = 0; 

    for(let i = 0; i < days; i++){
        food -= dailyFood
        daycounter++
        if (daycounter % 2 === 0){
            hay = hay - (food * 0.05); 
        }
        if (daycounter % 3 === 0){
            cover = cover - (guineaWeight / 3); 
        }

        if (food < dailyFood || hay <= 0 || cover <= 0){
            console.log("Merry must go to the pet store!")
            break;
        } 
    }

if (food >= dailyFood && hay >= 0 && cover >= 0){
    console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay  / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`)
    }

}
guineaPig(["10", "5", "5.2", "1"]);
console.log("______________________")
guineaPig(["1", "1.5", "3", "1.5"]);
console.log("______________________")
guineaPig(["9", "5", "5.2", "1"]);





/* Another one: 

    function guineaPig(input) {

        let foodInGrams = Number(input.shift()) * 1000;
        let hayInGrams = Number(input.shift()) * 1000;
        let coverInGrams = Number(input.shift()) * 1000;
        let pigsWeightInGrams = Number(input.shift()) * 1000;
        let isEnough = true;
    
        for (let day = 1; day <= 30; day++) {
    
            foodInGrams -= 300;
    
            if (day % 2 === 0) {
                hayInGrams -= 0.05 * foodInGrams;
            }
            if (day % 3 === 0) {
                coverInGrams -= pigsWeightInGrams / 3;
            }
    
            if (foodInGrams < 0 || hayInGrams < 0 || coverInGrams < 0) {
                isEnough = false;
                break;
            }
    
        }
        if (isEnough) {
            console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`);
        } else {
            console.log("Merry must go to the pet store!");
        }
    }
    guineaPig(["1", 
    "1.5", 
    "3", 
    "1.5"
    ]) */
