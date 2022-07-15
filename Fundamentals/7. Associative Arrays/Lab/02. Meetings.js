

// АЗ

// определено действие при повтарящ се ключ (повтарящо се име)

function meetings(array){

    let meetings = {};

    for (let lienInfo of array){  // завъртаме през всички елементи в масива
        let [day, name] = lienInfo.split(" ") // записваме под различни променливи всеки елемент от всеки отделен елемент в масива

        if (meetings.hasOwnProperty(day)){  // проверяваме дали деня се повтаря
           console.log(`Conflict on ${day}!`); // ако се повтаря принтираме следното:
        } else { // ако не се повтаря
            meetings[day] = name // записваме в обекта, името към съответния ден
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let [day, name] of Object.entries(meetings)){ // с Object.entries() връща масив от двойка елемнети от даден обект - ключ и стойност 
                                                       // + ги записваме като нови променлизи, за да шринтираме после с тях
        console.log(`${day} -> ${name}`)
    }

}
meetings([
'Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'
])

meetings([
'Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'
])






