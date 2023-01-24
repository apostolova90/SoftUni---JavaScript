function subtract() {
    
        let firstNumberElement = document.getElementById('firstNumber'); // достъпваме първия елемент
        let secondNumberElement = document.getElementById('secondNumber') // достъпваме втория елемент
        
        let firstNumber = Number(firstNumberElement.value); // взимаме стойността, която има първия елемент и тъй като тя винаги е стринг, я превръщаме в число
        let secondNumber = Number(secondNumberElement.value); // взимаме стойността, която има втория елемент и тъй като тя винаги е стринг, я превръщаме в число
        let result = firstNumber - secondNumber; // правим сметка

        let resultElement = document.getElementById('result'); // взимаме под нова променлива елемента, където ще изкараме резултата
        resultElement.textContent = result; // казваме му да изкара самия резултат (сметката, която направихме по-горе)
}