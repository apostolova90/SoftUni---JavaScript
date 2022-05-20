function movieRating(input){

    let index = 1;
    let n = Number(input[0]);
    
    let movieName = 0;
    let movieRate = 0;
    let totalRate = 0;
    let maxScore = Number.MIN_SAFE_INTEGER;
    let minScore = Number.MAX_SAFE_INTEGER
    let avgScore = 0;
    let maxScoreMovie = 0;
    let minScoreMovie = 0;
   

    for(let i = 0; i < n; i++){

        movieName = input[index];
        index++;
        movieRate = Number(input[index]);
        index++;

        totalRate += movieRate;
         

        if (maxScore < movieRate){
            maxScore = movieRate;
            maxScoreMovie = movieName
        } else if (minScore > movieRate){
            minScore = movieRate;
            minScoreMovie = movieName
        }

    }

    avgScore = totalRate / n;

    console.log(`${maxScoreMovie} is with highest rating: ${maxScore.toFixed(1)}`);
    console.log(`${minScoreMovie} is with lowest rating: ${minScore.toFixed(1)}`);
    console.log(`Average rating: ${avgScore.toFixed(1)}`);


}
movieRating(["5","A Star is Born","7.8","Creed 2","7.3","Mary Poppins","7.2","Vice","7.2","Captain Marvel","7.1"]);