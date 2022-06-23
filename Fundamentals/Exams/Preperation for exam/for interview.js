function arraysDemo(first, second){

    let firstNumberaArr = [];
    let secondNumberArr = [];

    firstNumberaArr = first.map(Number).filter(el => !isNaN(el));
    secondNumberArr = second.map(Number).filter(el => !isNaN(el));

    let resultArray = firstNumberaArr.concat(secondNumberArr);
    let maxNumber = Math.max(...resultArray);  //диструктурираме елементите от масива и минаваме през тях
    let minNumber = Math.min(...resultArray);  //диструктурираме елементите от масива и минаваме през тях

    console.log(maxNumber - minNumber)


}

arraysDemo([1, 'asd', '1', {}, '1a00',5,-11,3],[10,22,'a',false])

