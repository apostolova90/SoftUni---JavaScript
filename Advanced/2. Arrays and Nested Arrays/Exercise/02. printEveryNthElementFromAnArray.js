function printEveryNthElem(array, num){

    let newArray = [];
    for (let i = 0; i <= array.length; i+=num){
        newArray.push(array[i])
    }

    return newArray;
}
printEveryNthElem(['5', '20', '31', '4', '20'], 2);
printEveryNthElem(['dsa','asd', 'test', 'tset'], 2);
printEveryNthElem(['1', '2','3', '4', '5'], 6)