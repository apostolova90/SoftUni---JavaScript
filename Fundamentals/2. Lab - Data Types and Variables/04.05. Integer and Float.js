// с parseInt


function integerAndFloat(num1, num2, num3){

    let result = num1 + num2 + num3;
   
    console.log(`${result} - ${parseInt(result) === result ? "Integer" : "Float"}`)
    // с "parseInt" обръщаме резултата (result) в цяло число и ако той е еднакъв с резултата (result), числото ще е Intiger
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303)