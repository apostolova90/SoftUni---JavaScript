function integerAndFloat(num1, num2, num3){

    let result = num1 + num2 + num3;
    let resToString = String(result);
    let isFloat = false;

    for (let i = 0; i < resToString.length; i++){
        if (resToString[i] === "."){
            isFloat = true;
        }
    }
    console.log(`${result} - ${isFloat ? "Float" : "Integer"}`)
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303)