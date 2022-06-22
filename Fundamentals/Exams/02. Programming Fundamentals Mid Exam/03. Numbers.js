function numbers(sequence){
 
    let arrOfStrings = sequence.split(" ");
    let arrOfNumbers = [];
    let sum = 0;
 
    for(let el of arrOfStrings){
        
        let currentNumber = Number(el)
        arrOfNumbers.push(currentNumber);
        sum += currentNumber;
    }
 
    let average = sum / arrOfNumbers.length;
    
 
    let greaterThanAverage = [];
 
    for (let el of arrOfNumbers){
        if(el > average){
            greaterThanAverage.push(el);
        }
    }
    greaterThanAverage.sort((a,b) => b-a);
    for (let i = 0; i < 5 && i < greaterThanAverage.length; i++){
        console.log(greaterThanAverage[i])
    }
}
numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');













/* съкратено решение:

function numbers(sequence) {
    let arrOfNumbers = sequence.split(" ").map(Number);
   
    let sum = 0;
   
    for (let el of arrOfNumbers) {
      sum += el;
    }
   
    let average = sum / arrOfNumbers.length;
   
    arrOfNumbers = arrOfNumbers
      .filter((el) => el > average) // филтрира да е по-малко от average
      .sort((x, y) => y - x) // сортира по големина
      .slice(0, 5); // slice-ва в нов масив и дава 5 елементс
   
    return arrOfNumbers.length > 0 ? arrOfNumbers.join(" ") : "No"; // тернарен оператор
  }
  console.log(numbers("10 20 30 40 50"));
  console.log(numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51"));
  console.log(numbers("1"));
  console.log(numbers("-1 -2 -3 -4 -5 -6")); */









/* 
Another:

function numbers(sequence) {
    sequence = sequence.split(' ').map(Number);
    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }
    let avg = sum / sequence.length;

    let topFive = [];

    sequence = sequence.sort((a, b) => b - a)
    for (let i = 0; i < 5; i++) {
        if (sequence[i] > avg) {
            topFive.push(sequence[i]);
        }
    }
    if (topFive.length > 0) {
        console.log(topFive.join(' '));
    } else {
        console.log('No');
    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');*/