// АЗ

// по колко пъти се повтарят всички думи в масив

function oddOccurrences(input){

    let arrayOfWords = input.split(" "); // разделяме всички думи в масива - ['Java', 'C#', 'Php', 'PHP', 'Java', 'PhP', '3', 'C#', '3', '1', '5', 'C#']

    let obj = {};

    for (let word of arrayOfWords){ //минаваме през всички елемeнти в масива
        word = word.toLowerCase() //правим всички букви във всяка дума малки, за да можем да ги проверим (защото ако има големи и малки, ги третира като различни думи)
        if (!obj.hasOwnProperty(word)){ // и казваме, че ако елемента го няма (т.е. е само 1 на брой)
            obj[word] = 1 // стойността към сменящия се ключ трябва да е равна на 1 - {Java: 1, C#: 1......}
        } else {
            obj[word] += 1  // ако пък някоя дума се повтори, добавяме към стойността й 1 - {Java: 2, php: 2....}
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]); // сортираме

    let resultArray = [];

    for (let [key, value] of sorted) { // записваме под нови величини елементите от всеки ОБЕКТ
        if (value % 2 !== 0){ // проверяваме длаи стойността на е четна или нечетна
            resultArray.push(key) // ако е нечетна, записваме само конкретния ключ съответстваш на дадената стройност, в нов масив
        }
    }
    console.log(resultArray.join(' '));

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')