function change(input) {
    const bitcoin = Number(input[0]);
    const yuan = Number(input[1]);
    const comission = Number(input[2]);

    const yuanToUsd = 0.15;
    const usdToBgn = 1.76;
    const bgnToEur = 1.95;
    const bitcoinInBgn = bitcoin * 1168;

    const yuanInBgn = (yuan * yuanToUsd) * usdToBgn;
    let totalMoney = (yuanInBgn + bitcoinInBgn) / bgnToEur;
    let finalMoney = totalMoney - ((totalMoney * comission) / 100);

    console.log(finalMoney.toFixed(2));


}
change(["1", "5", "5"]);
change(["20", "5678", "2.4"]);