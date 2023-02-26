// трябва да направим функция, която да ВРЪЩА (remove) обект, който съдържа МЕТОДИ(append, remove...), който да връщат манипулации на едно нещо


function commandProcessor(){
    let result = '';

    return {
        append(str){
            result += str;
        },

        removeStart(num){
            result = result.substring(num);
        },
    
        removeEnd(num){
            result = result.substring(0, result.length - num)
        },
    
        print() {
            console.log(result);
        }
    };

}

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
