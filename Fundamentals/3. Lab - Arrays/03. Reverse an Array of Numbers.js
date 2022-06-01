function reverseAnArrayOfNumbers (n, arr){

    let newArr = [];          // създавам нов масив, в които после ще добавям

    for (let i = 0; i < n; i++){        // пускам да върти цикъла, до числото до което ми трябват
        newArr.push(arr[i]);        // наливам в празния масив, числата през, които минава цикъла
                                    // като .push добавя нова позижия в масива, но тойрелано е празен и няма други позиции
    }

    let reversedArr = []
    for (let i = newArr.length - 1; i >= 0; i--){    //с "newArr.length - 1" казваме на програмата да започне да брой от мосления елемент в масива
                                                       // с i-- въртин от отзад наред
        reversedArr.push(newArr[i])
}
    console.log(reversedArr.join(" "));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
console.log("-------------------------------")
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
console.log("-------------------------------")
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);
