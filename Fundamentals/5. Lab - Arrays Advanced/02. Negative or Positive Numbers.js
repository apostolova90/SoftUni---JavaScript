function negativeOrPositiveNumber(array){

    let result = [];
 

    for (let el of array){
        el = Number(el);

        if (el < 0){
            result.unshift(el)
        } else {
            result.push(el)
        }
    }

    console.log(result.join("\n"))
}
negativeOrPositiveNumber(['7', '-2', '8', '9'])
negativeOrPositiveNumber(['3', '-2', '0', '-1'])