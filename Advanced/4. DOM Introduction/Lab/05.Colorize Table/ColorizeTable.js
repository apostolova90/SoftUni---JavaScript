function colorize(){
    let allMatches = document.querySelectorAll('tr'); // взимам всички елементи tr
    let arr = Array.from(allMatches); // наливам ги в масив
    for (let i = 1; i < arr.length; i+=2) { // въртя през всеки втори елемент в масива
        arr[i].style.background = 'teal'; // и го оцветявам в желания цвят
    }
}
