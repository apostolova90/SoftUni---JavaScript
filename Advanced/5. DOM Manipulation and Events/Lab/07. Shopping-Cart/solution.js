function solve() {

   let text = document.querySelector('textarea'); // взимаме полето с текста
   let sum = 0;

   const btns = Array.from(document.querySelectorAll('.add-product')) // взимаме масив от всички Add бутони
   btns.forEach(x => x.addEventListener('click', onClick)); // следим за кликане на бутона и казваме какво да се случи, ако бъде кликнат

   const btnCheckOut = document.querySelector('button.checkout'); // взимаме checkOut бутона
   btnCheckOut.addEventListener('click', onClickCheckOut) // следим за кликане на бутона и казваме какво да се случи, ако бъде кликнат

   const list = []; // правим масив, който ще съдържа имената на продуктите


   function onClick(event) { // функцията, която казва какво да се случи, когато се натисне бутон Add
      const name = event.target.parentElement.parentElement.querySelector('.product-title').textContent; // взимаме името на продукта, за който е натиснат бутон Add
      const price = Number(event.target.parentElement.parentElement.querySelector('.product-line-price').textContent); // взимаме цената на продукта, за който е натиснат бутон Add
      sum += price; // добавяме цената към общата сума на пазарския списък
      if (!list.includes(name)) { // ако масива с имената на продуктите, не съдържа дадения продукт, го добавяме
         list.push(name);
      }
      const output = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      text.value += output; // наливаме тесктав в текст полето, което взехме най-горе
   }


   function onClickCheckOut() { // функцията, която казва какво да се случи, когато се натисне бутон CheckOut
      text.value += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.` // какво да се изпише, когато сме готови с крайния списък
      btns.forEach(x => x.removeEventListener('click', onClick)); // disable - ваме всички бутони, така че вече да не могат да се натискат
      btnCheckOut.removeEventListener('click', onClickCheckOut)
   }
}




/* function solve() {
   const btns = Array.from(document.querySelectorAll('.add-product'))

   btns.forEach(x => x.addEventListener('click', onClick));
   let text = document.querySelector('textarea');
   let sum = 0;
   const btnCheckOut = document.querySelector('button.checkout');
   btnCheckOut.addEventListener('click', onClickCheckOut)
   const list = [];



   function onClick(event) {

      const name = event.target.parentElement.parentElement.querySelector('.product-title').textContent;
      const price = Number(event.target.parentElement.parentElement.querySelector('.product-line-price').textContent);

      sum += price;
      if (!list.includes(name)) {

         list.push(name);
      }
      const output = `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      text.value += output;

   }
   function onClickCheckOut() {
      text.value += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.`
      btns.forEach(x => x.removeEventListener('click', onClick));
      btnCheckOut.removeEventListener('click', onClickCheckOut)
   }

} */