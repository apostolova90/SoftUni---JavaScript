function equalArrays(arr1, arr2){

    let isIdentical = true //ще върти цикъла докато не кажа, че е грешно (това ми трябва, за да знае програмата какво да прави, в случай че цикъла по-долу никога не се окаже верен, т.е. ако двата масива СА идентични. Така програмата ще знае какво да прави.)
for (let i = 0; i < arr1.length; i++){  // пускаме сикъла да върти, като приемаме, че двата масива са с една и съща дължина
    if (arr1[i] !== arr2[i]) { // проверяваме дали са различни
        console.log(`Arrays are not identical. Found difference at ${i} index`) // ако са различни принтираме
        isIdentical = false;  //казваме че булевата е грешна
        break; // и спираме програмата
    }
}

if (isIdentical){  // Ако програмата не даде резултат нито веднъж в цикъла горе, ще продължи със смятане на сумата
    let sum = 0;
    for (let string of arr1){
        sum += Number(string)
    }
    console.log(`Arrays are identical. Sum: ${sum}`)
}
    
}
equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);