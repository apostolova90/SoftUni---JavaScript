function create(input) {

   let parentElement = document.getElementById('content'); // първо взимаме елемента/мястото където ще наливаме - контейнера

   let elements = input;   // взимаме инпута

   for (let i = 0; i < elements.length; i++) { // завъртаме през всички елементи в инпута
      let div = document.createElement('div') // създаме div-а 
      let p  = document.createElement('p') // създаме параграфа
      let text = document.createTextNode(elements[i]) // взимаме самия текст
   
      p.appendChild(text); // към параграфа добавяме текста
      p.style.display = 'none'; // даваме display none на параграфа, за да го скрием, докато не се кликне на даденото поле
      div.appendChild(p) // към div-a закачаме параграфите като child element 
      div.addEventListener('click', function(event) {//добавяме event, като първия елемент е самия евент, който искаме да реализираме, а вторият е например функция (действие) която да се изпълни 
         event.target.children[0].style.display = 'block'; // (а за самата функция) - взимаме първия children в parent-a, за да можем да променим style-a му при кликане
      });

      parentElement.appendChild(div) // добавяме div-a към perrent елемента 
   }
}