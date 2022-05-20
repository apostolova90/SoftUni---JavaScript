function seriesCalculation(input) {
    const nameOfMovie = input[0];
    const numberOfSeasons = Number(input[1]);
    const numberOfSeriesIn1Seoson = Number(input[2]);
    const timeOfEachSeries = Number(input[3]);

    let timeWithReklami = timeOfEachSeries + timeOfEachSeries * 0.2;
    let extraTimeForSpecialSeries = numberOfSeasons * 10; 
    let totalTimeNeeded = timeWithReklami * numberOfSeriesIn1Seoson * numberOfSeasons + extraTimeForSpecialSeries;

    console.log(`Total time needed to watch the ${nameOfMovie} series is ${totalTimeNeeded} minutes.`);
}
seriesCalculation(["Lucifer", "3", "18", "55"]);
/* seriesCalculation(["Game of Thrones", "7", "10", "50"]);
seriesCalculation(["Riverdale", "3", "21", "45"]); */
