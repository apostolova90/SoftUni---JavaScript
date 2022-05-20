function basketballEquipment(input){

    let taxForYear = Number(input[0]);
    let sneakers = taxForYear * 0.60;
    let clothes = sneakers * 0.80;
    let ball = clothes / 4;
    let accessories = ball / 5; 

    let totalMoneyNeeded = taxForYear + sneakers + clothes + ball + accessories;

    console.log(totalMoneyNeeded.toFixed(2));


}
basketballEquipment(["320"]);
basketballEquipment(["550"]);