function harvest(input){
    let sizeOfField = Number(input[0]);
    let sizeOfFieldForWine = sizeOfField * 0.40;

    let grapesPerMeter = Number(input[1]);
    let kgGrapesForField = sizeOfFieldForWine * grapesPerMeter;

    let kgNeededFor1LeterWine = 2.5;

    let litersWineCanBeProduced = kgGrapesForField / kgNeededFor1LeterWine;
    let litersWineNeeded = Number(input[2]);

    let diffrence = Math.abs(litersWineNeeded - litersWineCanBeProduced);

    let numberOfWorkers = Number(input[3]);
    let litersPerWorker = diffrence / numberOfWorkers;

if (litersWineCanBeProduced < litersWineNeeded){
    console.log (`It will be a tough winter! More ${Math.floor(diffrence)} liters wine needed.`)
}
else if (litersWineCanBeProduced >= litersWineNeeded){
    console.log (`Good harvest this year! Total wine: ${Math.floor(litersWineCanBeProduced)} liters.`)
    console.log (`${Math.ceil(diffrence)} liters left -> ${Math.ceil(litersPerWorker)} liters per person.`)
    }
}
harvest (["650","2","175","3"]);