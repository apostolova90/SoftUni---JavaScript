function toggle() {
    // първо взимаме елемента бутон, за да работим с него (да сменяме текста при натискане)
    let button = document.querySelector('.button'); //в скобите пишем . за клас и # за ID
   
    // след това преверка за стойността на бутона и смяна на текста на бутона
    if (button.textContent === 'More'){ 
        button.textContent = 'Less'
    } else {
        button.textContent = 'More'
    }

    // взимаме екстра текста (който е ID и затова е с #)
    let text = document.querySelector('#extra') 

    // променяме CSS правилото на текста --- да се показва или да се скрива
    if (text.style.display === 'none') { // еко текста е скрит, да стане на block 
        text.style.display = 'block'
    } else {
        text.style.display = 'none' // и обратното
    }
}