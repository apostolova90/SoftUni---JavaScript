

// с Тошко, с Map

function oddOccurrences(input){

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
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')