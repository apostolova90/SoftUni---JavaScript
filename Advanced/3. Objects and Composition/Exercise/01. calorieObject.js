function caloriesObject(array){

    let obj = {};
    
    for (let i = 0; i < array.length; i+=2){
        let productName = array[i];
        let calories = Number(array[i+1]);

        // слагаме всичко в обекта
        obj[productName] = calories;
    }
    console.log(obj)
}
caloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
caloriesObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])