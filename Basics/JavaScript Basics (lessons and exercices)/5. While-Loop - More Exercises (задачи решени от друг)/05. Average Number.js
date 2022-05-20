function average(input){

    let n = Number(input[0]);
    let total = 0;
    let number = 0;
    let index = 1;
    let avg = 0;

    for (let i = 0; i < n; i++){
        number = Number(input[index]);
        index++;
        total += number;
    }

    avg = total / n;
    console.log(avg.toFixed(2));

}
average(["4", "3", "2", "4", "2"])