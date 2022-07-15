//как работи .includes()

let myArray = [10, 20, 30, 40, 50]

console.log(myIncludes(myArray, 20))
console.log(myIncludes(myArray, -20))

function myIncludes(array, value){
    for(let el of array){
        if(el === value){
            return true;
        } // не слагаме else тук, защото няма д аработи правилно
    } 
    return false;
}

