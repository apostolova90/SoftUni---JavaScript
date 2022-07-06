function meetings(array){

    let result = {};

    for (let line of array){  // завъртаме през вси1ки елемнти в масива

    let [day, name] = line.split(" ");  // записваме под различни променливи всеки елемнт от всеки отделен елемнт в масива
        if (result.hasOwnProperty(day)) { // проверяваме дали денят се повтаря
            console.log(`Conflict on ${day}!`) // ако се повтаря някъде
        } else { // ако не се повтаря
            result[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    console.log(result)
    for (let [key, value] of Object.entries(result)) {
        console.log(`${key} -> ${value}`)
    }
}
meetings([
'Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'
])

/* meetings([
'Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'
]) */