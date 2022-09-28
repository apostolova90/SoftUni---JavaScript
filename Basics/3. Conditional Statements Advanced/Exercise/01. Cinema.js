function cinema(input){
    let type = input[0];
    let lines = Number(input[1]);
    let columns = Number(input[2]);
    
    let premirePrice = 12;
    let normalPrice = 7.50;
    let discountPrice = 5.00
    
    let profit = 0;

    if (type === "Premiere"){
        profit = (lines * columns) * premirePrice;
    } else if (type === "Normal"){
        profit = (lines * columns) * normalPrice;
    } else if (type === "Discount"){
        profit = (lines * columns) * discountPrice;
    }
    console.log (profit.toFixed(2));
}
cinema(["Premiere","10","12"])