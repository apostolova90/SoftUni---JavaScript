function firstAndLastKNumber(numbers) {

    let k = numbers.shift()

    let firstK = numbers.slice(0, k) //взимаме първите числа
    // 0 - от къде да започне 
    // к - до къде да върти

    let lastK = numbers.slice(-k)

    console.log(firstK.join(" "))
    console.log(lastK.join(" "))
}
firstAndLastKNumber([2, 7, 8, 9]);
firstAndLastKNumber([3, 6, 7, 8, 9]);
