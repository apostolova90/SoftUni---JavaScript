

/* ДРУГ */


function sorting(array) {
    let result = [];
    let small = array.slice().sort((a, b) => a - b);
    let big = array.sort((a, b) => b - a);
  
    for (let i = 0; i < array.length / 2; i++) {
       let smallestNum = small[i];
       let biggestNum = big[i];
       result.push(biggestNum, smallestNum)
    }
    if (array.length % 2 !== 0) {
       result.pop();
    }
    console.log(result.join(' '));
    }    

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
