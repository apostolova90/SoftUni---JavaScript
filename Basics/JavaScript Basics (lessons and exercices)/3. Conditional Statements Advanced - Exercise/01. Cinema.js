function cinema(input){
    let type = input[0];
    let lines = Number(input[1]);
    let coloumns = Number(input[2]);
    
    let premirePrice = 12;
    let normalPrice = 7.50;
    let discountPrice = 5.00
    
    let profit = 0;

    if (type === "Premiere"){
        profit = (lines * coloumns) * premirePrice;
    } else if (type === "Normal"){
        profit = (lines * coloumns) * normalPrice;
    } else if (type === "Discount"){
        profit = (lines * coloumns) * discountPrice;
    }
    console.log (profit.toFixed(2));
}
cinema(["Premiere","10","12"])