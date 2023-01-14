//POP - маха последния елемнт от масив
let arr5 = [21, 25, 36, 41, 46, 86, 46]
arr5.pop() 
console.log(arr5) // [21, 25, 36, 41, 46, 86]



//PUSH - добавя елемнт в края на масив
let arr6 = [21, 25, 36, 41, 46, 86, 46]
arr6.pop(76) 
console.log(arr6) // [21, 25, 36, 41, 46, 86, 46, 76]




// SPLICE
// махане
let arr = [21, 25, 36, 41, 46, 86, 46]
arr.splice(0,2) // започва от 0 позиция и маха два елемента
console.log(arr) // [36, 41, 46, 86, 46]

//махане и добавяме
let array = [21, 25, 36, 41, 46, 86, 46]
array.splice(0,2,45) 
console.log(array) // [45, 36, 41, 46, 86, 46]

//добавяне
let array1 = [21, 25, 36, 41, 46, 86, 46]
array1.splice(0,0,45) 
console.log(array1) // [45, 21, 25, 36, 41, 46, 86, 46]



// REVERSE 

let array2 = [1, 2, 3, 4]
array2.reverse() 
console.log(array2) // [4, 3, 2, 1]




// SORT strings
let arr0 = ['cc', 'a', 'bbb']
let sortedArray = arr0.sort(function(a,b){
    return b.localeCompare(a);
}) 
console.log(sortedArray) //['cc', 'bbb', 'a']



//SORT numbers
let array3 = [21, 25, 36, 41, 46, 86, 46]
let newArray = array3.sort(function(a,b){
    return b-a;
}) 
console.log(newArray) // [45, 21, 25, 36, 41, 46, 86, 46]
// !NB  return a - b      ще върне // [45, 21, 25, 36, 41, 46, 86, 46]


// SORT by two criteria
let array6 = ['alpha', 'beta', 'gamma']
array6.sort(function(a,b){
    return a.length - b.length || a.localeCompare(b) // сортираме по дължина и по първа буква
    })
console.log(array) // ['beta', 'alpha', 'gamma']





// FILTER
let carsArray = ['BMW', 'audi', 'Opel', 'Lada', 'Moskvich', 'Volga']
let fourLetterCars = carsArray.filter(car => {  // от всички коли, взимаме първата и всяка следваща подред и сортираме само тези, които отговарят на условието
    return car.length == 4
});
console.log(fourLetterCars)



// MAP
let numbers = [1, 2, 3, 4]
let doubledNumbers = numbers.map(num => num * 2); // взимаме всеки елемнт от масива и го умножаваме по 2
console.log(doubledNumbers)

let cars = ['BMW', 'audi', 'Opel', 'Lada', 'Moskvich', 'Volga'];
let toUpperCase = cars.map(car => car.toUpperCase());
console.log(toUpperCase)



// REDUCE
let nums = [1, 2, 3, 4]
let sum = nums.reduce((acc, num) => { //acc - в него запазваме първоначалната стойност, която е 0
    return acc + num;
}, 0);
console.log(sum)
