function orders(product, quantity){

    let total = 0;

    switch(product){
        case 'coffee': 
            total = quantity * 1.50
            break;
        case 'coke': 
            total = quantity * 1.40
            break;
        case 'water': 
            total = quantity * 1
            break;
        case 'snacks': 
            total = quantity * 2
            break;
    }

    console.log(total.toFixed(2));
}
orders("water", 5)
orders("coffee", 2)



// с arrow fumction

/* function orders(product, quantity){

    let total = 0;
    let coffeeSum = () => quantity * 1.50
    let cokeSum = () => quantity * 1.40
    let waterSum = () => quantity * 1
    let snacksSum = () => quantity * 2

    switch(product){
        case 'coffee':             
            total = coffeeSum()
            break;

        case 'coke':             
            total = cokeSum()
            break;

        case 'water':             
            total = waterSum()
            break;

        case 'snacks':             
            total = snacksSum()
            break;
    }

    console.log(total.toFixed(2));
}

orders("water", 5)
orders("coffee", 2)
 */