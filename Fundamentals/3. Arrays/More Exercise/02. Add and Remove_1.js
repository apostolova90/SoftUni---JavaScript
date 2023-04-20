function addAndRemove (arr){

    let newArr = []
    let sum = 1;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "remove"){
            newArr.pop()            
        } else {
            newArr.push(sum)      
        }
        sum++
    }

    if (newArr.length === 0){
        console.log("Empty")
    } else {
        console.log(newArr.join(" "));
    }

} 
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove'])

