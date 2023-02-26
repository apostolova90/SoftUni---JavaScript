function listProcessor(input) {

    let colection = []; // създаваме колекция, под формата на масив
    
    let objFunctions = { // създаваме обект, който да държи всички функции - по една за всяка команда
        add(str){
            colection.push(str)
        },

        remove(str){
            while(colection.includes(str)){
                colection.splice(colection.indexOf(str), 1)
            }
        },

        print(){
            console.log(colection.join(','));
        }
    }

    for (element of input){
        let [command, word] = element.split(' ');

        if (command === 'add'){
            objFunctions.add(word);
        } else if (command === 'remove'){
            objFunctions.remove(word);
        } else if (command === 'print'){
            objFunctions.print();
        }

    }
}


listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);






