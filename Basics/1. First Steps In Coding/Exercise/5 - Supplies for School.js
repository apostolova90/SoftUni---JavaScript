function suppliesForSchool(input){
    const pensPrice = 5.80;
    const markerPrice = 7.20;
    const detergentPrice = 1.20;
    const pensPacks = Number(input[0]);
    const markerPacks = Number(input[1]);
    const detergentLiters = Number(input[2]);
    const discount = Number(input[3]);
    const pensTotalPrice = pensPrice * pensPacks;
    const markerTotalPrice = markerPrice * markerPacks;
    const detergentTotalPrice = detergentPrice * detergentLiters;
    const priceForProducts = pensTotalPrice + markerTotalPrice + detergentTotalPrice;
    const discountedPrice = priceForProducts * discount / 100
    const totalPriceNeeded = priceForProducts - discountedPrice
    console.log (totalPriceNeeded);
 
 }
 
 suppliesForSchool (["2", "3", "4", "25"]);