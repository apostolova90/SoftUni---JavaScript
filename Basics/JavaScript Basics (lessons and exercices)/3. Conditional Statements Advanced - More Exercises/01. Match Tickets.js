function matchTickets(input){

let vipTicketPrice = 499.99; 
let normalTicketPrice = 249.99; 

const budget = Number(input[0]);
const categoryOfTicket = input[1];
const numberOfPeople = Number(input[2]);

let transport = 0;

if (numberOfPeople >= 1 && numberOfPeople <= 4){
    transport = budget * 0.75;
} else if (numberOfPeople >= 5 && numberOfPeople <= 9) {
    transport = budget * 0.60;
} else if (numberOfPeople >= 10 && numberOfPeople <= 24) {
    transport = budget * 0.50;
} else if (numberOfPeople >= 25 && numberOfPeople <=49) {
    transport = budget * 0.40;
} else {
    transport = budget * 0.25;
}

let moneyLeft = budget - transport;

let moneyForAllVipTickets = numberOfPeople * vipTicketPrice;
let moneyForAllNormalTickets = numberOfPeople * normalTicketPrice;

let diffrenceVip = Math.abs(moneyLeft - moneyForAllVipTickets);
let diffrenceNormal = Math.abs(moneyLeft - moneyForAllNormalTickets);

switch (categoryOfTicket) {
case "VIP":
    if (moneyLeft >= moneyForAllVipTickets){
        console.log (`Yes! You have ${diffrenceVip.toFixed(2)} leva left.`);
    } else {
        console.log (`Not enough money! You need ${diffrenceVip.toFixed(2)} leva.`);
    }
break;

case "Normal": 
if (moneyLeft >= moneyForAllNormalTickets){
    console.log (`Yes! You have ${diffrenceNormal.toFixed(2)} leva left.`);
} else {
    console.log (`Not enough money! You need ${diffrenceNormal.toFixed(2)} leva.`);
}
break;
    }
}
matchTickets (["1000","Normal","1"]);
matchTickets (["30000","VIP","49"]);
matchTickets (["50000", "Normal", "200"]);