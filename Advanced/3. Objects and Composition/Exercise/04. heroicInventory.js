// Another



function heroicInventory(input) {
    let result = [];
    
    for (const iterator of input) {
        let [name, level, items] = iterator.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : []; // подобно на if...else 
    
        result.push({ name, level, items });
    }
    console.log(JSON.stringify(result));
}

heroicInventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])