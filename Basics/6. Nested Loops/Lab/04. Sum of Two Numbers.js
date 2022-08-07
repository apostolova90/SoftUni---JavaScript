function sum(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let n = Number(input[2]);
    
    let isFound = false; // boolean flag
    let counter = 0;

    for (let x = start; x <= end; x++){
        for (let y = start; y <= end; y++){
            counter++;
            let result = x + y;

            if (result === n){
                console.log(`Combination N:${counter} (${x} + ${y} = ${n})`)
                isFound = true;
                break;
            }
        }
        if(isFound){ // за да прекъснем и външният цикъл
            break;
        }
    }
    if(!isFound){
    console.log(`${counter} combinations - neither equals ${n}`)
    }
}
sum(["1", "10", "5"]);
sum(["23", "24", "20"]);