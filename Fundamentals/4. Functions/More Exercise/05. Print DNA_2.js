function printDNA(num) {
    let string = 'ATCGTTAGGG';
    let counter = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 4 === 1) {
            console.log(`**${string[counter]}${string[counter + 1]}**`);
        } else if (i % 4 === 2) {
            console.log(`*${string[counter]}--${string[counter + 1]}*`);
        } else if (i % 4 === 3) {
            console.log(`${string[counter]}----${string[counter + 1]}`);
        } else if (i % 4 === 0) {
            console.log(`*${string[counter]}--${string[counter + 1]}*`);
        }
        counter+=2;
        if (counter === 10){
            counter = 0;
        }
    }


}
printDNA(4);
printDNA(10);