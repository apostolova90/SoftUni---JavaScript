function equalSusEvenOddPosition(input){

let start = Number(input[0]); // ["100000"] => [`1`, `0`, `0`, `0`, `0`]
let end = Number(input[1]); 
let printLine = "";

for(let index = start; index <= end; index++){
   let curNum = "" + index;
   let oddSum = 0;
   let evenSUm = 0;

   for(let j = 0; j <= curNum.length; j++){
    let currDigit = Number(curNum.charAt(j));
    if (j % 2 === 0){
        evenSUm += currDigit;
    } else {
        oddSum += currDigit;
    }
        }
        if (oddSum === evenSUm){
            printLine += `${index} `
        }
    }
    console.log(printLine);
}
equalSusEvenOddPosition(["100000","100050"]);
equalSusEvenOddPosition(["123456","124000"]);
equalSusEvenOddPosition(["299900","300000"]);
equalSusEvenOddPosition(["100115","100120"]);
