function validate() {
    
    let emailField = document.getElementById('email');  //взимам полето, където пишем мейла
    const regex = /[a-z]+\@[a-z]+\.[a-z]+/; // regex, който задава как трябва да изглежда мейла

    emailField.addEventListener('change', onChange); // задаваме да следи за събитие (дали ще се въведе промяна)
    // "onChnage" е самата функция
    function onChange(event){
    
          if (event.target.value.match(regex)){ // проверяваме дали стойността на въведения текст, отгоеаря на regex-a
            event.target.removeAttribute('class'); // ако да, магаме класа
            return;
          } 

          emailField.className = 'error'; // ако не, принтираме "error"

    }
}