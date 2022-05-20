function gymnastics(input) {
  const country = input[0];
  const device = input[1];
  const maxRating = 20;

  let difficulty = 0;
  let performance = 0;
  let totalForBoth = 0;

  if (country === "Russia") {
    switch (device) {
      case "ribbon":
        difficulty = 9.1;
        performance = 9.4;
        break;
      case "hoop":
        difficulty = 9.3;
        performance = 9.8;
        break;
      case "rope":
        difficulty = 9.6;
        performance = 9.0;
        break;
    }
  } else if (country === "Bulgaria") {
    switch (device) {
      case "ribbon":
        difficulty = 9.6;
        performance = 9.4;
        break;
      case "hoop":
        difficulty = 9.55;
        performance = 9.75;
        break;
      case "rope":
        difficulty = 9.5;
        performance = 9.4;
        break;
    }
  } else {
    switch (device) {
      case "ribbon":
        difficulty = 9.2;
        performance = 9.5;
        break;
      case "hoop":
        difficulty = 9.45;
        performance = 9.35;
        break;
      case "rope":
        difficulty = 9.7;
        performance = 9.15;
        break;
    }
  }

  totalForBoth = difficulty + performance;
  let difference = Math.abs(maxRating - totalForBoth);
  let percentage = difference / maxRating * 100;

  console.log(`The team of ${country} get ${totalForBoth.toFixed(3)} on ${device}.`);
  console.log(`${percentage.toFixed(2)}%`);
}
gymnastics(["Bulgaria", "ribbon"]);
gymnastics(["Russia", "rope"]);
gymnastics(["Italy", "hoop"]);
