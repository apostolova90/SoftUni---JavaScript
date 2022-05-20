function integerAndFloat(num1, num2, num3){

    let sum = num1 + num2 + num3;

    let type  = (sum % 1 === 0) ?
    "Integer" : "Float"

    console.log(`${sum} - ${type}`);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303)




/* друг малко по-труден начин:

function integerAndFloat(num1, num2, num3){

    let sum = num1 + num2 + num3;
    sum % 1 === 0 ?
    sum += " - Integer" :
    sum += " - Float"
    
    console.log(sum);
}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303) */




/* с IF

function integerAndFloat(num1, num2, num3){

    let sum = num1 + num2 + num3;

    let type 
    if (sum % 1 === 0){
        type = "Integer"
    }else {
        type = "Float"
    }
    console.log(`${sum} - ${type}`);
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303) */