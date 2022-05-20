function poolDay(input) {
  const numberOfPeople = Number(input[0]);
  const priceEntrance = Number(input[1]);
  const priceDeckChair = Number(input[2]);
  const priceAmbrella = Number(input[3]);

  let numberOfAmbrellasNeeded = Math.ceil(numberOfPeople * 0.5);
  let deckChairsNeeded = Math.ceil(numberOfPeople * 0.75);

  let totalMoneyNeeded =
    numberOfPeople * priceEntrance +
    numberOfAmbrellasNeeded * priceAmbrella +
    deckChairsNeeded * priceDeckChair;

  console.log(`${totalMoneyNeeded.toFixed(2)} lv.`);
}
poolDay(["21", "5.50", "4.40", "6.20"]);
poolDay(["50", "6", "8", "4"]);

