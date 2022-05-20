function series(input) {

    let budget = Number(input[0]);
    let n = Number(input[1]);
    let index = 2;
    let seriesName = 0;
    let seriesPrice = 0;
    let tempPrice = 0;

    for (let i = 0; i < n; i++){
    seriesName = input[index];
    index++;
    seriesPrice = Number(input[index]);
    index++;

    switch (seriesName){
        case "Thrones" : seriesPrice *= 0.5;
        break;
        case "Lucifer" : seriesPrice *= 0.6;
        break;
        case "Protector" : seriesPrice *= 0.7;
        break;
        case "TotalDrama" : seriesPrice *= 0.8;
        break;
        case "Area" : seriesPrice *= 0.9;
        break;
        default : seriesPrice += 0;
    }

    tempPrice += seriesPrice;
    }
    let difference = Math.abs(budget - tempPrice)

    if(budget >= tempPrice){
        console.log(`You bought all the series and left with ${difference.toFixed(2)} lv.`)
    } else {
        console.log(`You need ${difference.toFixed(2)} lv. more to buy the series!`)
    }
}
series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
series(["25","6","Teen Wolf","8","Protector","5","TotalDrama","5","Area","4","Thrones","5","Lucifer","9"]);
