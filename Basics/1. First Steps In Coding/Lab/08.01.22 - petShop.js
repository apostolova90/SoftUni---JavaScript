function petShop(input){
    let dogs = 2.5;
    let cats = 4;
    let dogsFood = dogs * (input[0])
    let catsFood = cats * (input[1])
    let all = dogsFood + catsFood
    console.log (`${all} lv.`);
}

petShop (["5", "4"]);


