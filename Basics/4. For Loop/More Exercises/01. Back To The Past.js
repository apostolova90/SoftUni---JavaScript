function timeTravel(input){
    let index = 0;
    let legacy = Number(input[index]);
    index++;
    let year = Number(input[index]);
    index++;
    let age = 17;
    let spendings = 0; 
    let moneyLeft = 0;
    
     

    for (let i = 1800; i <= year; i++){
            age++ ;
        if (i % 2 === 0){
            spendings += 12000;
            
        }  else{
            spendings += 12000 + (50 * age);
            
        }

    }
    let diff = Math.abs(legacy - spendings)
      if (legacy >= spendings){
          console.log(`Yes! He will live a carefree life and will have ${diff.toFixed(2)} dollars left.`)
      } else {
        console.log(`He will need ${diff.toFixed(2)} dollars to survive.`)
      }

}
timeTravel(["50000", "1802"]);
timeTravel(["100000.15", "1808"])