function smallShop(input) {
    const product = input[0];
    const town = input[1];
    const quantiti = Number(input[2]);
    let price = 0;

    switch(town){
        case "Sofia":
            switch(product){
                case "coffee": price = quantiti * 0.5; break;
                case "water": price = quantiti * 0.8; break;
                case "beer": price = quantiti * 1.2; break;
                case "sweets": price = quantiti * 1.45; break;
                case "peanuts": price = quantiti * 1.60; break;
            }
            break;
        case "Plovdiv":
            switch(product){
                case "coffee": price = quantiti * 0.4; break;
                case "water": price = quantiti * 0.7; break;
                case "beer": price = quantiti * 1.15; break;
                case "sweets": price = quantiti * 1.30; break;
                case "peanuts": price = quantiti * 1.50; break;  
            }
            break;
        case "Varna":
            switch(product){
                case "coffee": price = quantiti * 0.45; break;
                case "water": price = quantiti * 0.7; break;
                case "beer": price = quantiti * 1.10; break;
                case "sweets": price = quantiti * 1.35; break;
                case "peanuts": price = quantiti * 1.55; break;
            }
            break;
    }
    console.log(price);
}
smallShop (["peanuts",
"Plovdiv",
"1"]);
