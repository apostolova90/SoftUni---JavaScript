function histogram(input){
    let n = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

for(let i = 1; i <= n; i++){    /*  "n" как да си прочетм входове, когато не знаем броя */
    let num = Number(input[i]);

    if (num < 200){
        p1Counter++
    } else if (num >= 200 && num <= 399){
        p2Counter++;
    } else if (num >= 400 && num <= 599){
        p3Counter++
    } else if (num >= 600 && num <= 799){
        p4Counter++;
    } else {
        p5Counter++;
    }
}
    let p1Procentage = p1Counter / n * 100;
    let p2Procentage = p2Counter / n * 100;
    let p3Procentage = p3Counter / n * 100;
    let p4Procentage = p4Counter / n * 100;
    let p5Procentage = p5Counter / n * 100;

console.log(`${p1Procentage.toFixed(2)}%`);
console.log(`${p2Procentage.toFixed(2)}%`);
console.log(`${p3Procentage.toFixed(2)}%`);
console.log(`${p4Procentage.toFixed(2)}%`);
console.log(`${p5Procentage.toFixed(2)}%`);

}

histogram(["3","1","2","999"]);
