// АЗ


function heroesOfCodeAndLogic(arr) {

let allHeroes = {}

let num = Number(arr.shift());

for (let i = 0; i < num; i++) {     //въртам през първите n елемента, за да им запиша данните в обекта:
    let tokens = arr.shift().split(" ")
    let name = tokens[0];
    let hitPoints = Number(tokens[1]);
    let manaPoints = Number(tokens[2]);

    allHeroes[name] = [] // създаваме нов масив вътре в обекта, и вътре наливаме като стойности hitPoints и manaPoints
    allHeroes[name].push(hitPoints)
    allHeroes[name].push(manaPoints)
}


//    allHeroes[name][0]      ----   под [0] е HP (hit points)
//    allHeroes[name][1]      ----   под [1] е MP (mana points)


    for (let i = 0; i < arr.length; i++) { // минавам през елементите, които са с команди
        
        if (arr[i] === "End"){
        break;
        }

        let tokens = arr[i].split(" - ");
        let command = tokens[0];
        let name = tokens[1];

        if(command === "CastSpell"){
            let MPneeded = Number(tokens[2]);
            let spellName = tokens[3];
            if (allHeroes[name][1] >= MPneeded){
                allHeroes[name][1] -= MPneeded
                let manaLeft = allHeroes[name][1]
                console.log(`${name} has successfully cast ${spellName} and now has ${manaLeft} MP!`)
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`)
            }


        } else if (command ==="TakeDamage"){            
            let damage = Number(tokens[2]);
            let attacker = tokens[3];
            allHeroes[name][0] -= damage
            if (allHeroes[name][0] > 0){
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${allHeroes[name][0]} HP left!`)
            } else {
                delete allHeroes[name];
                console.log(`${name} has been killed by ${attacker}!`)
            }
        
        } else if (command === "Recharge"){
            let diff = 200 - allHeroes[name][1]; // задължително смятаме разликата тук (преди да сме правили никакви сметки), защото иначе ще даде грешка по-нататък
            let amount = Number(tokens[2]);
            allHeroes[name][1] += amount;
            if (allHeroes[name][1] > 200){
                allHeroes[name][1] = 200
                console.log(`${name} recharged for ${diff} MP!`)
            } else {
                console.log(`${name} recharged for ${amount} MP!`);
            }

        } else if (command ==="Heal"){
            let diff = 100 - allHeroes[name][0]; // задължително смятаме разликата тук (преди да сме правили никакви сметки), защото иначе ще даде грешка по-нататък
            let amount = Number(tokens[2]);
            allHeroes[name][0] += amount;
            if (allHeroes[name][0] > 100){
                allHeroes[name][0] = 100
                console.log(`${name} healed for ${diff} HP!`);
            } else {
                console.log(`${name} healed for ${amount} HP!`);
            }
        }
    }

    for (let key of Object.keys(allHeroes)) { // после завъртаме през всички герой в главния обект, за да принтираме:
        console.log(`${key}`);   
        console.log(`HP: ${allHeroes[key][0]}`)
        console.log(`MP: ${allHeroes[key][1]}`)
}



}
heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']); 

heroesOfCodeAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])

