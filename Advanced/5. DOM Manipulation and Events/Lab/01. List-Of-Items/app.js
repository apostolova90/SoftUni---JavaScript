function addItem() {

        let inputElement = document.getElementById('newItemText'); // взимаме позицията на полето където ще вкараме новия текст
        let itemsElement = document.getElementById('items') // взимаме вече налиния списък
        
        let liElement = document.createElement('li'); // създаваме новия елемeнт, като вътре в скобата слагаме тага, в който искаме да го създадем ('p', 'li')
        
        liElement.textContent = inputElement.value; //взимаме стойността на новия елемент (взимаме value на мястото където сме сложите текста)
        
        itemsElement.appendChild(liElement) // закрепваме новия елемент към дървото, като псоледен елемент, за да се визуализира в браузъра
}