function blackFlag(array) {
    let daysCounter = 0;
    let totalPlunder = 0;
    let days = Number(array[0]);
    let plunderPerDay = Number(array[1]);
    let expectedPlunder = Number(array[2]);
  
    for (let i = 1; i <= days; i++) {
      daysCounter++;
  
      totalPlunder += plunderPerDay;
  
      if (daysCounter % 3 === 0) {
        totalPlunder += plunderPerDay * 0.5;
      }
  
      if (daysCounter % 5 === 0) {
        totalPlunder -= totalPlunder * 0.3;
      }
    }
  
    let difference = Math.abs(expectedPlunder - totalPlunder);
    let percentDifference = (totalPlunder * 100) / expectedPlunder;
    if (totalPlunder >= expectedPlunder) {
      console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
      console.log(
        `Collected only ${percentDifference.toFixed(2)}% of the plunder.`
      );
    }
  }
  blackFlag(["5", "40", "100"]);
  blackFlag(["10", "20", "380"]);





/*   Another:

  function blackFlag(arr) {
    let daysOfThePlunder = Number(arr[0]);
    let dailyPlunder = Number(arr[1]);
    let expectedPlunder = Number(arr[2]);

    totalPlunder = 0;

    for (let day = 1; day <= daysOfThePlunder; day++) {

        totalPlunder += dailyPlunder;

        if (day % 3 == 0) {
            totalPlunder += dailyPlunder * 0.50;
        }

        if (day % 5 == 0) {
            totalPlunder = totalPlunder * 0.70;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag(["10",
    "20",
    "380"]
); */