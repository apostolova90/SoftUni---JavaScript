function fruitShop(input){
    const fruit = input[0];
    const day = input[1];
    const quantiti = Number(input[2]);
    let price = 0;

    
    switch (day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (fruit){
                case "banana":price = quantiti * 2.50; break;
                case "apple":price = quantiti * 1.20; break;
                case "orange":price = quantiti * 0.85; break;
                case "grapefruit":price = quantiti * 1.45; break;
                case "kiwi":price = quantiti * 2.70; break;
                case "pineapple":price = quantiti * 5.50; break;
                case "grapes":price = quantiti * 3.85; break;
                default: console.log (`error`);
            } 
            break;
        case "Saturday":
        case "Sunday":
            switch (fruit){
                case "banana":price = quantiti * 2.70; break;
                case "apple":price = quantiti * 1.25; break;
                case "orange":price = quantiti * 0.90; break;
                case "grapefruit":price = quantiti * 1.60; break;
                case "kiwi":price = quantiti * 3.00; break;
                case "pineapple":price = quantiti * 5.60; break;
                case "grapes":price = quantiti * 4.20; break;
                default: console.log (`error`);
            } 
            break;
            default: console.log (`error`)
    } 
    if (price != 0){
    console.log(price.toFixed(2))
    }    
} 

fruitShop (["grapes", "Sunnday", "2"]);