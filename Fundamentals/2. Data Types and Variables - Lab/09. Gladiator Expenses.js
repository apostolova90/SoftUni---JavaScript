function gladiator(losts, helmetPrice, swordPrice, shieldPrice, armorPrice){

let price = 0;

for(let i = 1; i <= losts; i++){

    if (i % 2 === 0){
        price += helmetPrice
    } 
    if (i % 3 === 0){
        price += swordPrice
    }
    if (i % 6 === 0){
        price += shieldPrice
    }
    if (i % 12 === 0){
        price += armorPrice
        }
    }
    console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`)
}
gladiator(7,2,3,4,5);
gladiator(23,12.50,21.50,40,200);