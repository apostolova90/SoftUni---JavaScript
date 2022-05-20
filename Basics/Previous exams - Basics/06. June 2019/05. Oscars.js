function oscars(input){

    let pointsForNomination = 1250.5;

    let nameActor = input[0];
    let pointsActor = Number(input[1]);
    let numberOfJudges = Number(input[2]);
    
    let index = 3;
    let nameJudge = 0
    let pointsJudge = 0

    let totalPointsFromJudge = 0;
    let nameLength = 0;
    let diff = 0;



for(let i = 0; i < numberOfJudges; i++){

    nameJudge = input[index];
    index++;
    pointsJudge = Number(input[index]);
    index++

    nameLength = nameJudge.length;
    totalPointsFromJudge = (nameLength * pointsJudge) / 2

    pointsActor += totalPointsFromJudge;

    diff = Math.abs(pointsForNomination - pointsActor);

    if (pointsActor >= pointsForNomination){
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${pointsActor.toFixed(1)}!`);
        break;
    }
}
    if (pointsActor < pointsForNomination){
        console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);
oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"]);