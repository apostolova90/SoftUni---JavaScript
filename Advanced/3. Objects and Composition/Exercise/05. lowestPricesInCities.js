function lowestPricesInCities(input){

    let products = [];

    while (input.length > 0){
    let [town, product, price] = input.shift().split(" | ") // създаваме 3 отделни променливи
    
        if (products.filter(x => x.product === product).length > 0){ //първо проверяваме дали дължината на масива "products" е 0, т.е дали имаме вече наличен продукт, 
            let obj = products.find(x => x.product === product); //за да можем, ако има продукт да направим втора проверка дали има вече същия продукт
            if (obj.price > Number(price)) { // и ако дадения продукт го има, да проверим дали цената му е по-голяма от сегашната 
                obj.price = Number(price);
                obj.town = town
            }
        } else { // а ако го няма, да му добавим всичко
            let obj = {product, town, price: Number(price)};
            products.push(obj);
        }
    }
    for (let product of products){
        console.log(`${product.product} -> ${product.price} (${product.town})`);
    }
}
lowestPricesInCities([
'Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])