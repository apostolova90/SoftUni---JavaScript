function listOfNames(array){
    
array.sort(function(a,b){
    return a.localeCompare(b);
}) 

let num = 0;

    for (let ell of array) {
        num++;   
        console.log(`${num}.${ell}`) 
    }
}
listOfNames(["John", "Bob", "Christina", "Ema"]);