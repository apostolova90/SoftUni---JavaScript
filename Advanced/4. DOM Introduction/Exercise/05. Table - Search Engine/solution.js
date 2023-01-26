function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   let input = document.getElementById('searchField'); // взимаме input полето където пише клиента, за да ползваме вкараната от него информация
   let rows = document.querySelectorAll('tbody tr') // взимаме всички редове // querySelectorAll - взима всички елемeнти от даден вид (в случая по вложеност)
   
   function onClick() { // това е самата функция - какво да се случи при кликане на бутона
      
      for(let row of rows){ // първо завъртаме - изчистваме всички вече маркирани редове, за да започваме на чисто при всяко ново търсене
         row.classList.remove('select');
      }
      
      for(let row of rows){ // второ завъртане прес всеки ред (съдържащ name, email и course)
         if (input.value !== '' && row.innerHTML.includes(input.value)) { // правим проверка дали въведения импут е различен от празен стринг      И     дали реда съдържа въведения от потребителя текст
            row.className = 'select'; // ако съдържа въведения от потребителя текст, добавяме класа (т.е. връзваме го с CSS документа, където вече сме задали стила, който да се приложи)
         } 
      }

      input.value = '' // накрая изчистваме search полето

   }
}