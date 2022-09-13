function repainting(input){
   const nylonPrice = 1.50;
   const paintPrice = 14.50;
   const thinnerPrice = 5;
   const bagsPrice = 0.40;
   const nylonNeeded = Number(input[0]);
   const paintNeeded = Number(input[1]);
   const thinnerNeeded = Number(input[2]);
   const workersHoursNeeded = Number(input[3]);
   const nylonTotalPrice = (nylonNeeded + 2) * nylonPrice;
   const paintTotalPrice = (paintNeeded + (paintNeeded * 10 / 100)) * paintPrice;
   const thinnerTotalPrice = thinnerNeeded * thinnerPrice;
   const totalProductsPrice = nylonTotalPrice + paintTotalPrice + thinnerTotalPrice + bagsPrice;
   const workersPricePerHour = totalProductsPrice * 30 / 100;
   const workersTotalPrice = workersPricePerHour * workersHoursNeeded;
   const totalPrice = totalProductsPrice + workersTotalPrice
   console.log (totalPrice)
}
 
 repainting (["10", "11", "4", "8"]);