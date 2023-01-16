function addAndRemoveElements(array){

    let num = 0;
    let newArray = []

    for (let i = 0; i < array.length; i++){
        let currentCommand = array[i]
        if (currentCommand == "add"){
            newArray.push(i + 1);
        } else {
            newArray.pop()
        }
    }

    if (newArray.length == 0){
        console.log("Empty")
    } else {
        console.log(newArray.join('\n'))
    }
}
addAndRemoveElements(['add', 'add', 'add', 'add']);
addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']);
addAndRemoveElements(['remove', 'remove', 'remove']);