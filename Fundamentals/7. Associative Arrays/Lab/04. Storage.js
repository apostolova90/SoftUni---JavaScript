
// АЗ
// добавяне на стойност към стара стойност
function storage(array){

let map = new Map()

for (let lineInfo of array){
    let [product, quantity] = lineInfo.split(' ')

    if (map.has(product)) { // проверяваме дали продукта го има
        let oldQuantity = map.get(product) // ще върнем стойността, която имаме за дадения продукт
        map.set(product, oldQuantity + Number(quantity)); // записваме в .map ключа и новата стойност (която смятаме направо тук)
    } else {
        map.set(product, Number(quantity)); //aко продукта го няма, просто го зпаисваме в .map
    }
}

    for (let [key, value] of map.entries()) { // после минавам през .map и взимам двойките (клуч и стойност), за д амога да принтирам след това 
        console.log(key, "->", value)
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40'])























/* 
// с Точко на лекции

function storage(array){

    let result = new Map();

    for (let line of array){
        let [product, quantity] = line.split(" ");

        if (result.has(product)){ // проверяваме дали имaме продъкта
            let oldQuantity = result.get(product) // ще върнем стойността, която имаме за дадения продукт
            result.set(product, oldQuantity + Number(quantity)) //запазваме същия продукт но с ново value (староро quantity + tекущото quantity)
        } else {
           result.set(product, Number(quantity)); 
        }
    }

    for (let [key, value] of result.entries()) {
        console.log(key, "->", value)
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']) */