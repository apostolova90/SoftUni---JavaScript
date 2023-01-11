function smallestTwoNumbers(array){

// custom метод за сравняване с arrow функция

let result = [];
    array.sort((a,b) => a - b);    // arrow функция

// нормална функция
/* array.sort(function (a,b) {
    if (a < b){
        return -1;
    } else if (a > b){
        return 1
    } else {
        return 0
    }
} */

    result.push(array[0],array[1]);
    console.log(result.join(" "))
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3])