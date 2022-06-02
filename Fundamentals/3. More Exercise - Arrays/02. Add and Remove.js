function addAndRemove (arr){

    let newArr = []
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "remove"){
            newArr.push("");               
        } else {
            sum += 1
            newArr.push(sum)      
        }
    }

    console.log(newArr.join(" "));

} 
addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove'])

.....................