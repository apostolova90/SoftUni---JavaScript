function sumFirstAndLasr(array){

    let firstSum = Number(array[0])
    let lastSum = Number(array[array.length-1])

    let sum = firstSum + lastSum

    console.log(sum)
}
sumFirstAndLasr(['20', '30', '40'])
sumFirstAndLasr(['5', '10'])