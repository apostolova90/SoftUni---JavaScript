function maxNumber(input){

    let index = 0;
    let command = input[index];
    index++;
    let maxNumber = 0;

    while(command !== "Stop"){
    let num = Number(command);

    if(maxNumber < num){
        maxNumber = num;
    }
        command = input[index];
        index++
    }
    console.log (maxNumber);
}
maxNumber(["100", "99", "80", "70", "Stop"]);


/* 
ИЛИ, използвайки Number.MIN_SAFE_INTEGER */

function maxNumber(input){

    let index = 0;
    let command = input[index];
    index++;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while(command !== "Stop"){
    let num = Number(command);

    if(maxNumber < num){
        maxNumber = num;
    }
        command = input[index];
        index++
    }
    console.log (maxNumber);
}
maxNumber(["100", "99", "80", "70", "Stop"]);
