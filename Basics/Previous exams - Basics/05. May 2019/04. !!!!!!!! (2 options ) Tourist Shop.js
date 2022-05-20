function touristShop (input){
      let index = 0;
      
      let budget = Number(input[index]);
      index++;
      
      let command = input[index];
      index++
      
      let counter = 0;
      let totalSpentMoney = 0;
      
      while (command !== "Stop"){
      
            counter++;
      
            let price = Number(input[index]);
            index++
      
            if (counter % 3 === 0){
                  price = price / 2;
            }
      
            let diff = Math.abs(price - budget)
            if (price > budget){
                  console.log("You don't have enough money!");
                  console.log(`You need ${diff.toFixed(2)} leva!`);
                  break;
            }
            budget -= price;
            totalSpentMoney += price;
      
            command = input[index];
            index++
      }
      
      if (command === "Stop"){
      console.log(`You bought ${counter} products for ${totalSpentMoney.toFixed(2)} leva.`)
      }     
      }
touristShop(["153.20","Backpack","25.20","Shoes","54","Sunglasses","30","Stop"]);
touristShop(["54","Thermal underwear","24","Sunscreen","45"]);







/* ........... решение с input.length................................................................





function touristShop(input){
  let index = 0;
  let budget = Number(input[index]);
  index++;

  let numberOfProducts = 0;
  let totalPriceForAllProdycts= 0;
  let neededMoney = 0; 

  for(let i = 0; i < input.length / 2; i++){
      let nameProduct = input[index];
      index++

      let priceProduct = Number(input[index]);
      index++;

if (nameProduct === "Stop"){   // условието за "Stop" го слагам първо 
        console.log(`You bought ${numberOfProducts} products for ${totalPriceForAllProdycts.toFixed(2)} leva.`);
        break;
}

numberOfProducts++ // броенето на продуктите го слагам тук , защото ако е преди условието за Стоп, ще ми начислява и за него +1, понеже ще го чете като рподукт

      if (numberOfProducts % 3 === 0){
        priceProduct = priceProduct * 0.5;           // условието също го слагам тук 
      }


neededMoney = Math.abs(budget - priceProduct);
      
if (budget >= priceProduct){
      budget = budget - priceProduct;
} else if (budget < priceProduct){
      console.log(`You don't have enough money!`);
      console.log(`You need ${neededMoney.toFixed(2)} leva!`);
} 

totalPriceForAllProdycts += priceProduct;
  } 
}
touristShop(["153.20","Backpack","25.20","Shoes","54","Sunglasses","30","Stop"]);
touristShop(["54","Thermal underwear","24","Sunscreen","45"]);
 */