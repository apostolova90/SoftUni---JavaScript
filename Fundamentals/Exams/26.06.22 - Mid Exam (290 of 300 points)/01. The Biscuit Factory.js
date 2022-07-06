function theBiscuitsFactory(array){

    let biscuitsPerDayPerWorker = Number(array[0]);
    let numberOfWorkers = Number(array[1]);
    let totalPerDay = numberOfWorkers * biscuitsPerDayPerWorker;

    let biscuitsProducedFor30Days = Number(array[2]);

    let totalProduction = 0

    for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        totalProduction += Math.floor(totalPerDay * 0.75)
      } else {
        totalProduction += totalPerDay
      }
    } 
    console.log(`You have produced ${totalProduction} biscuits for the past month.`)

    let difrentProduction = Math.abs(biscuitsProducedFor30Days - totalProduction);
    let persentage = (difrentProduction / biscuitsProducedFor30Days * 100).toFixed(2);

    if (totalProduction > biscuitsProducedFor30Days){
        console.log(`You produce ${persentage} percent more biscuits.`)
    } else if (totalProduction < biscuitsProducedFor30Days){
        console.log(`You produce ${persentage} percent less biscuits.`)
    }

}
theBiscuitsFactory(["78", "8", "16000"])
theBiscuitsFactory(['65', '12', '26000'])
theBiscuitsFactory(['163', '16', '67020'])


/* 
function theBiscuitsFactory(array){

    let biscuitsPerDayPerWorker = Number(array[0]);
    let numberOfWorkers = Number(array[1]);
    let totalPerDay = numberOfWorkers * biscuitsPerDayPerWorker;

    let biscuitsProducedFor30Days = Number(array[2]);

    let days = 30;
    let totalProduction = 0

    for (let i = 0; i < days; i++) {
    if (i % 3 === 0) {
        totalProduction += totalPerDay * 0.75
      } else {
        totalProduction += totalPerDay
      }
    } 
    console.log(`You have produced ${totalProduction} biscuits for the past month.`)

    let difrentProduction = Math.abs(biscuitsProducedFor30Days - totalProduction);
    let persentage = (difrentProduction / biscuitsProducedFor30Days * 100).toFixed(2);

    if (totalProduction > biscuitsProducedFor30Days){
        console.log(`You produce ${persentage} percent more biscuits.`)
    } else if (totalProduction < biscuitsProducedFor30Days){
        console.log(`You produce ${persentage} percent less biscuits.`)
    }

}
theBiscuitsFactory(["78", "8", "16000"])
theBiscuitsFactory(['65', '12', '26000'])
theBiscuitsFactory(['163', '16', '67020']) */