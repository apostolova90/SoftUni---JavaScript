function birthdayParty (input) {
const priceRoom = Number(input[0]);
let priceCake = priceRoom * 0.20;
let priceDrinks = priceCake - priceCake * 0.45;
let priceAnimator = priceRoom / 3;

let moneyNeededForTheParty = priceRoom + priceCake + priceDrinks + priceAnimator;

console.log (moneyNeededForTheParty);
}
birthdayParty (`2250"`);
birthdayParty (`3720`);