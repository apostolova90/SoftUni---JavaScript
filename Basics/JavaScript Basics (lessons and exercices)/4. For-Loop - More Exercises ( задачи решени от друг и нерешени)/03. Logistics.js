function logistics(input){
    let index = 0;
    let countOfCargo = Number(input[index]);
    index++;

    let minibus = 0;
    let truck = 0;
    let train = 0;
    let total = 0; 

    for(let i = 0; i < countOfCargo; i++){
        let tonsPerCargo = Number(input[index]);
        index++
        total += tonsPerCargo;

        if (tonsPerCargo <= 3){
            minibus += tonsPerCargo
        } else if (tonsPerCargo >= 4 && tonsPerCargo <= 11){
            truck += tonsPerCargo
        } else if (tonsPerCargo >= 12){
            train += tonsPerCargo;
        }
    } 

    let middleCargo = (minibus * 200 + truck * 175 + train * 120) / total;

    let minibusProcentage = minibus / total * 100;
    let truckProcentage = truck / total * 100;
    let trainProcentage = train / total * 100;

    console.log(middleCargo.toFixed(2));
    console.log(`${minibusProcentage.toFixed(2)}%`);
    console.log(`${truckProcentage.toFixed(2)}%`);
    console.log(`${trainProcentage.toFixed(2)}%`);
    
}
logistics(["4","1","5","16","3"]);
/* logistics(["5","2","10","20","1","7"]); */
