function perfectNumber(number){

    let sumOfDivisors = 1;

    for(let i = 2; i < number; i++){
        if(number % i === 0){
            sumOfDivisors += i
        }
    }

/*     let result = (sumOfDivisors === number) ? 
    'We have a perfect number!' : "It's not so perfect."
    console.log(result) */

    if (sumOfDivisors === number){
        console.log ('We have a perfect number!')
    } else {
        console.log ("It's not so perfect.")
    }
}
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)