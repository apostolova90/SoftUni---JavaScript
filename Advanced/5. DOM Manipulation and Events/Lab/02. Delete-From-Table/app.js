function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name ="email"]'); // взимаме позицията на полето където ще вкараме новия текст
    let emailCellElement = document.querySelectorAll('tr td:nth-of-type(2)') // в tr елемент взимаме всички td, които са втори
    let resultElement = document.getElementById('result'); // взимаме позицията на резултата
    
    let emailElements = Array.from(emailCellElement); // правим го на масив
    let targetElement = emailElements.find(x => x.textContent == emailInputElement.value) // намери ми в emailElements, конкретен елемент на който value му е равно на emailInputElement, и ми го върни

    //превим проверка за наличност 
    if (targetElement){ // ако го открие
    targetElement.parentNode.remove() // изтриваме на намерения елемент (заедно със самия parent)
    resultElement.textContent = 'Deleted.' // и слагаме текста в result полето
    } else {
        resultElement.textContent = 'Not found.' // и
    }

}