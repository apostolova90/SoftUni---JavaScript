
//ДРУГ 

/* function arenaTier(arr) {

    let gladiators = {};

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Ave Cesar") {
            break;
        }
        if (arr[i].includes("->")) {
            let tokens = arr[i].split(' -> ');
            let gladiator = tokens[0];
            let technique = tokens[1];
            let skill = Number(tokens[2]);
            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
                gladiators[gladiator][technique] = skill;
            } else {
                if (gladiators[gladiator].hasOwnProperty(technique)) {
                    if (gladiators[gladiator][technique] < skill) {
                        gladiators[gladiator][technique] = skill;
                    }
                } else {
                    gladiators[gladiator][technique] = skill;
                }
            }
        } else if (arr[i].includes("vs")) {
            let tokens = arr[i].split(' vs ');
            let gladiator1 = tokens[0];
            let gladiator2 = tokens[1];
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                let techniques1 = Object.keys(gladiators[gladiator1]);
                let techniques2 = Object.keys(gladiators[gladiator2]);
                let total1 = 0;
                let total2 = 0;
                for (let skill1 of techniques1) {
                    for (let skill2 of techniques2) {
                        if (skill1 === skill2) {
                            total1 += gladiators[gladiator1][skill1];
                            total2 += gladiators[gladiator2][skill2];
                        }
                    }
                }
                if (total1 > total2) {
                    delete gladiators[gladiator2];
                } else if (total2 > total1) {
                    delete gladiators[gladiator1];
                }
            }
        }
    }

    let totalSkill = 0;

    for (let key of Object.keys(gladiators)) {
        let techniquesKeys = Object.keys(gladiators[key]);
        for (let key1 of techniquesKeys) {
            totalSkill += gladiators[key][key1];
        }
        gladiators[key].totalSkill = totalSkill;
        let gladiatorArr = [];
        for (let key2 of Object.keys(gladiators[key])) {
            gladiatorArr.push(key2);
            gladiatorArr.push(gladiators[key][key2]);
        }
        gladiators[key] = gladiatorArr;
        totalSkill = 0;
    }

    function gladaitorsSort([keyA, valueA], [keyB, valueB]) {
        if (gladiators[keyB][valueB.length - 1] !== gladiators[keyA][valueA.length - 1]) {
            return gladiators[keyB][valueB.length - 1] - gladiators[keyA][valueA.length - 1];
        }
        return keyA - keyB;
    }

    function techniquesSort([keyA, valueA], [keyB, valueB]) {
        if (tech[keyB] !== tech[keyA]) {
            return tech[keyB] - tech[keyA];
        }
        return keyA.localeCompare(keyB);
    }

    let sorted = Object.entries(gladiators).sort(gladaitorsSort);

    let tech = {};

    for (let element of sorted) {
        let name = element[0];
        let totalSkill = element[1].pop();
        element[1].pop();
        console.log(`${name}: ${totalSkill} skill`);
        for (let i = 0; i < element[1].length; i += 2) {
            let technique = element[1][i];
            let skill = element[1][i + 1];
            tech[technique] = skill;
        }

        let sorted = Object.entries(tech).sort(techniquesSort);

        for (let element of sorted) {
            let technique = element[0];
            let skill = element[1];
            console.log(`- ${technique} <!> ${skill}`);
        }

        tech = {};
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]) */