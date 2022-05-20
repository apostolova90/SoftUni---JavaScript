function fuelTank(input){

        let typeOfFuel = input[0];
        let litersOfFuel = Number(input[1]);
        let havingDiscount = input[2];

        let gasolinePrice = 2.22;
        let dieselPrice = 2.33;
        let gasPrice = 0.93;       
        
        let price = 0
        
switch (typeOfFuel) {
case "Gasoline":
        price = gasolinePrice;
break;
case "Diesel":
        price = dieselPrice;
break;
case "Gas": 
        price = gasPrice;
break;
}


switch (typeOfFuel){
case "Gasoline":
if (havingDiscount === "Yes") {
        price -= 0.18;
}
break;
     
case "Diesel":
if (havingDiscount === "Yes") {
        price -= 0.12;
}
break;
        
case "Gas":
if (havingDiscount === "Yes") {
        price -=  0.08;
}        
break;
}



if (litersOfFuel >= 20 && litersOfFuel <=25) {
        price -= price * 0.08;
} else if (litersOfFuel > 25) {
        price -= price * 0.10;
}
 


let totalPrice = litersOfFuel * price
console.log (`${totalPrice.toFixed(2)} lv.`);
        
}
fuelTank (["Gasoline","25","No"]);
        
        













/* 




function fuelTank(input){

let typeOfFuel = input[0];
let litersOfFuel = Number(input[1]);
let havingDiscount = input[2];

let gasolinePrice = 2.22;
let dieselPrice = 2.33;
let gasPrice = 0.93;


let price = 0

switch (typeOfFuel){
case "Gasoline":
if (havingDiscount === "Yes") {
        price = gasolinePrice - 0.18;
}
price = gasolinePrice
break;

case "Diesel":
if (havingDiscount === "Yes") {
        price = dieselPrice - 0.12;
}
price = dieselPrice
break;

case "Gas":
if (havingDiscount === "Yes") {
        price = gasPrice - 0.08;
}
price = gasPrice
break;
}

if (litersOfFuel >= 20 && litersOfFuel <=25) {
        price -= price * 0.08;
} else if (litersOfFuel > 25) {
        price -= price * 0.10;
}

let totalPrice = litersOfFuel * price
console.log (`${totalPrice.toFixed(2)} lv.`);

}
fuelTank (["Gasoline","25","No"]);

 */