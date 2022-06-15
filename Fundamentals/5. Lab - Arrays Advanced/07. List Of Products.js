function listOfProducts(input) {

    let sortedInput = input.sort();

    let arrL = sortedInput.length;

    for (let i = 0; i < arrL; i++) {
        console.log(`${i+1}.${sortedInput[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);
