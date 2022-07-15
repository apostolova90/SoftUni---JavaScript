function storeProvision(currentsStorcks, forDelivery){

    let storeProducts = {}; //създаваме обекта  

    let currentsLength = currentsStorcks.length;
    let forDeliveryLength = forDelivery.length;

    for (let i = 0; i < currentsLength; i+=2){ //минаваме през първия масив, 
        let product = currentsStorcks[i]      // като записваме под product всеки втори елемент от масива

        storeProducts[product] = Number(currentsStorcks[i+1]) //записваме ги в обекта
    }
 
    for (let j = 0; j < forDeliveryLength; j+=2){
        let product = forDelivery[j] 
        if (!storeProducts.hasOwnProperty(product)){  //казваме: ако нещо го няма налично в магазина
            storeProducts[product] = 0; // кажи му че има количество 0
        }
        storeProducts[product] += Number(forDelivery[j+1]) // и в последствие му добави стойност
        // ако не влезе в горната проверка (т.е. ако го има), просто ще му добави допълнителния брой
    }
    
    for (const product in storeProducts) { //минаваме през всички елементи
        console.log(`${product} -> ${storeProducts[product]}`)
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
               ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])

storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
               ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'])