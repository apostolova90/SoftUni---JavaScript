function printNthElemnt (arr){

    let step = Number(arr[arr.length - 1]);

    let newArr = []

    for (let i = 0; i < arr.length - 1; i += step){
        newArr.push(arr[i])      
    }
    console.log(newArr.join(" "));
} 
printNthElemnt(['5', '20', '31', '4', '20', '2']);
printNthElemnt(['dsa', 'asd', 'test', 'test', '2']);
printNthElemnt(['1', '2', '3', '4', '5', '6'])
