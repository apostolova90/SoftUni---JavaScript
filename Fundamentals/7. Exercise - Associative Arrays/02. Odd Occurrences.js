
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






// с Точко, с Map

/* function oddOccurrences(input){

    let result =new Map();
    let words = input.split(" "); // разделяме всички думи в масива - ['Java', 'C#', 'Php', 'PHP', 'Java', 'PhP', '3', 'C#', '3', '1', '5', 'C#']

    for (let word of words){
        word = word.toLowerCase()
        if (result.has(word)){
            let oldValue = result.get(word) //взиамаме старата стойност
            result.set(word, oldValue + 1) // и добавяме към старата стойност 1
        } else {
            result.set(word, 1) //ако думата не се повтаря, а се среща само 1 път, създаваме нова стойност към key
        }
    }

    let filterResult = Array.from(result).filter(([key, value]) => { // .from връща масив от масиви, .filter изкарва ключ и стойност
        return value % 2 !== 0    //връща само стойностите, които отговарят на условието
    }) 

    let buff = "";
    for (let [key, value] of filterResult){
        buff += key + " "
    }

    console.log(buff)

}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food') */