function christmasPrep(input) {
    let paper = 5.80;
    let fabric = 7.20;
    let glue = 1.20;

    let numberOfRollsPaper = Number(input[0]);
    let numberOfRollsFabric = Number(input[1]);
    let littersOfGlue = Number(input[2]);

    let persentage = Number(input[3]);


    let totalMoneyForMaterials = (paper * numberOfRollsPaper) + (fabric * numberOfRollsFabric) + (glue * littersOfGlue);
    let totalMoneyNeded = totalMoneyForMaterials - (totalMoneyForMaterials * persentage) / 100;

    console.log(totalMoneyNeded.toFixed(3))
}
christmasPrep(["2", "3", "2.5", "25"]);
christmasPrep(["4", "2", "5", "13"]);
