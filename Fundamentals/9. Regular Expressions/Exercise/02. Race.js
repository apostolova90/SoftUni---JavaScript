
// Another 

function race(arr) {

    let names = arr.shift().split(', '); // отделяме имента в отделна прменлива
    let people = {}; // създаваме обект, в който да вкарваме имената (като ключ) и дистанцията

    for (let name of names) { // наливаме имената като ключ в обекта
        people[name] = 0; // и садаваме 0, като стойност към всеки ключ, след това ще заместим 0 с дистанцията на всеки участник
    }                           // {George: 0, Peter: 0, Bill: 0, Tom: 0}

    for (let string of arr) { 
        if (string === "end of race") {
            break;
        }
        let regex1 = /[a-z]/gi; // чрез regex минаваме през всички букви в странга...
        let name = string.match(regex1).join(''); // и ги съединяваме, за да получим имената  - 'George'.....
        let regex2 = /[0-9]/g; // чрез regex минаваме през всички цифри в странга...
        let distanceArr = string.match(regex2); // събираме ги в променлива --- ['4', '5', '5', '6', '6', '6', '8']
        let distance = 0;
        for (let num of distanceArr) { // минаваме през всички цифри
            distance += Number(num); // и ги събираме, за да получим изминатата дистанция
        }
        if (people.hasOwnProperty(name)) { // проверяваме дали имаме името
            people[name] += distance; // ако го имате, заместваме 0, която е стойност към ключа, с получената по-горе дистанция
        }
    }

    let sorted = Object.entries(people).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA); // сортирсме дистанциите на всички участници

    for (let i = 0; i < 3; i++) { // принтираме получения резултат
        let name = sorted[i][0];
        if (i === 0) {
            console.log(`${i + 1}st place: ${name}`);
        } else if (i === 1) {
            console.log(`${i + 1}nd place: ${name}`);
        } else if (i === 2) {
            console.log(`${i + 1}rd place: ${name}`);
        }
    }
}

race([
'George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])

    
race([
'Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])