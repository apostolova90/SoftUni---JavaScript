function yardGreening(input){
   let price = 7.61;
   let discount = 0.18;
   let area = (input[0]);
   let totalPrice = price * area;
   let totalDiscount = totalPrice * discount;
   let finalPrice = totalPrice - totalDiscount;

   console.log (`The final price is: ${finalPrice} lv.`);
   console.log (`The discount is: ${totalDiscount} lv.`);

}

yardGreening ([550]);
