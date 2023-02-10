function addItem() {
    // взимаме стойността на двете полета, където ще пишем текст
    let newText = document.getElementById('newItemText').value;
    let newValue = document.getElementById('newItemValue').value;

    // създаваме новия елемент, който съдържа текстовете, който ще добавим към options
    let newOption = document.createElement('option');
    newOption.text = newText; // задаваме му текста
    newOption.value = newValue; // задаваме му стойност

    // взимаме полето на менюто
    let menu = document.getElementById('menu');

    if (newOption !== '' && newValue !== ''){ // превим проверка дали изобщо нещо е писано в полетата
        menu.appendChild(newOption); // добавяме новия елемент (newOptions), към paretn-a (към drop-down менюто)
    }
    
    // след това нулираме двете полета, където вкарваме текст
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}