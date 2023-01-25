function search() {
   
   let userWord = document.getElementById('searchText').value; // взимаме полето където пише клиента, за да ползваме вкараната от него информация
   let townsElement = document.querySelectorAll('#towns li'); // взимаме листа с градовете // querySelectorAll - взима всички елемeнти от даден вид (в случая по вложеност)
   let arrayTownsElement = Array.from(townsElement) // превръщаме го в масив, за да въртим през него
   let match = document.getElementById('result'); // взимаме полето, където ще изкарваме резултата

   let counter = 0;
      for (let town of arrayTownsElement){ // завъртаме през всички градове
         if(town.textContent.includes(userWord)){ // проверяваме, дали името на града съдържа вкарания от клиента текст
            counter++ // актоализираме брояча
            town.style.fontWeight = 'bold'; // ако го има прилагаме върху него зададените по условие стилове
            town.style.textDecoration = 'underline';
         } else { // при нови зададени данни от клиента, трябва да върне думите по стария начин
            town.style.fontWeight = 'normal'; // махаме зададените по условие стилове
            town.style.textDecoration = 'none';
         }
      }
      match.textContent = `${counter} matches found`;
}
