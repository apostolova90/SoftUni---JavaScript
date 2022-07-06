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
'coffee 40'])