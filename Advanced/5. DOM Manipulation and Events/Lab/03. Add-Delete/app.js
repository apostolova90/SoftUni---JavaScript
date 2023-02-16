function addItem() {
    let itemElement = document.getElementById('items'); // взимаме листа с items
    let inputElement = document.getElementById('newItemText'); // взимаме позицията на въведения текст

    let liElement = document.createElement('li'); // създаваме новия елемeнт, като вътре в скобата слагаме тага, в който искаме да го създадем ('p', 'li')  
    liElement.textContent = inputElement.value; //взимаме стойността на новия елемент (взимаме value на мястото където сме сложите текста)

    inputElement.value = ''; //зануляване на input поле
    
    // създаваме елемент delete
    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';

    deleteElement.addEventListener('click', (e) => { // прилагаме следната функция
        e.currentTarget.parentElement.remove()
    });

    liElement.appendChild(deleteElement);
    itemElement.appendChild(liElement);
}
