
//ДРУГ


function bombNumbers(arr, bombArr) {
    let bombNum = bombArr[0];
    let power = bombArr[1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === bombNum) {
            arr[i] = 0;
            for (let j = i; j >= i - power; j--) {
                arr[j] = 0;
            }
            for (let k = i; k <= i + power; k++) {
                arr[k] = 0;
            }
        }
 
 
    }
    let sum = 0;
   
    for (let l = 0; l < arr.length; l++) {
        sum+=arr[l];
    }
 
console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);






// още едно решение

/* function bombNumbers(arr1, arr2) {
        let bomb = Number(arr2[0]);
        let range = Number(arr2[1]);
        while (arr1.includes(bomb)) {
            let index = arr1.indexOf(bomb);
            let elementsToRemove = range * 2 + 1;
            let startIndex = index - range;
    
            if (startIndex < 0) {
                elementsToRemove += startIndex;
                startIndex = 0;
            }
            arr1.splice(startIndex, elementsToRemove);
            
        }
        console.log(arr1.reduce((a, partial) => a + partial, 0));

    }
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]); */