function sequence(input) {
    let n = Number(input[0]);

    let k = 1; 

    while(n >= k){
        console.log(k);
        k = k * 2 + 1;

    }
}
sequence(["3"]);
sequence(["8"]);
sequence(["17"]);
sequence(["31"]);
