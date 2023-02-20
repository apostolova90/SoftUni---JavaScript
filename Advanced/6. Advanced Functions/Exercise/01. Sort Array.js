function sortArray(array, order){

    if (order === 'asc'){
        array.sort((a,b) => a - b) // сортиране по ascending order
    } else {
        array.sort((a,b) => b - a) // сортиране по descending order
    }

    return array;
    
}
sortArray([14, 7, 17, 6, 8], 'asc');