function gladiatorExpenses(lostFights, hPrice, swPrice, shPrice, aPrice) {

    let sum = 0;
    let shBreakCount = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            sum += hPrice;
            sum += swPrice;
            sum += shPrice;
            shBreakCount++;
            if (shBreakCount % 2 == 0) {
                sum += aPrice;
            }
        } else {
            if (i % 2 == 0) {
                sum += hPrice;
            } else if (i % 3 == 0) {
                sum += swPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)