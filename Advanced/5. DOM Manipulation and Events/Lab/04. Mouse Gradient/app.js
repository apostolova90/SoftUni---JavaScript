function attachGradientEvents() {
    const gradient = document.getElementById('gradient'); // взимаме елемент
    const result = document.getElementById('result') // взимаме елемент

    gradient.addEventListener('mousemove', onMouseOver); // закрепяме event върху елемента
    
    function onMouseOver(event){ // създаваме функция (onMouseOver)
        result.textContent = Math.floor(event.offsetX / gradient.clientWidth * 100) + '%' // взимаме result елемента  
    }
}