function oscarsWeek(input) {
  const nameOfMovie = input[0];
  const typeOfRoom = input[1];
  const numberOdTickets = Number(input[2]);

  let pricePerTicket = 0;

  if (typeOfRoom === "normal") {
    switch (nameOfMovie) {
      case "A Star Is Born":
        pricePerTicket = 7.5;
        break;
      case "Bohemian Rhapsody":
        pricePerTicket = 7.35;
        break;
      case "Green Book":
        pricePerTicket = 8.15;
        break;
      case "The Favourite":
        pricePerTicket = 8.75;
        break;
    }
  } else if (typeOfRoom === "luxury") {
    switch (nameOfMovie) {
      case "A Star Is Born":
        pricePerTicket = 10.5;
        break;
      case "Bohemian Rhapsody":
        pricePerTicket = 9.45;
        break;
      case "Green Book":
        pricePerTicket = 10.25;
        break;
      case "The Favourite":
        pricePerTicket = 11.55;
        break;
} 
    } else {
    switch (nameOfMovie) {
      case "A Star Is Born":
        pricePerTicket = 13.5;
        break;
      case "Bohemian Rhapsody":
        pricePerTicket = 12.75;
        break;
      case "Green Book":
        pricePerTicket = 13.25;
        break;
      case "The Favourite":
        pricePerTicket = 13.95;
        break;
    }
  }

  let totolPrice = numberOdTickets * pricePerTicket;

  console.log (`${nameOfMovie} -> ${totolPrice.toFixed(2)} lv.`);
}

oscarsWeek(["A Star Is Born", "luxury", "42"]);
oscarsWeek(["Green Book", "normal", "63"]);
