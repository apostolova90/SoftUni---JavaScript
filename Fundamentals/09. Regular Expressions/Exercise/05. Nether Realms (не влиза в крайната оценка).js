
//Another

function netherRealms(text) {
    //Focus on solving the problem.

    input = text.split(/[, ]+/g).sort((a, b) => a.localeCompare(b));

    input.forEach(currentItem => {
        const healthPat = /(?<health>[^\+\-*\/\.\d])/g;
        const damagePat = /(?<damage>[+|-]?[0-9]+[.]*?[0-9]+|[+|-]?[0-9]+)/g;
        const actionPAt = /(?<action>\*|\/)/g;

        let health = 0;
        const healthMatch = currentItem.match(healthPat);
        if (healthMatch) {
            health = healthMatch
                .map(x => x.charCodeAt(0))
                .reduce((a, b) => a + b, 0)
        }

        let dmg = 0;
        const dmgMatch = currentItem.match(damagePat);
        if (dmgMatch) {
            dmg = dmgMatch
                .map(Number)
                .reduce((a, b) => a + b, 0)
        }

        const actionMatch = currentItem.match(actionPAt);
        if (actionMatch) {
            actionMatch.forEach(x => {
                if (x === '*') {
                    dmg *= 2;
                } else {
                    dmg /= 2;
                }
            });
        }

console.log(`${currentItem} - ${health} health, ${dmg.toFixed(2)} damage`);});

}
netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');

