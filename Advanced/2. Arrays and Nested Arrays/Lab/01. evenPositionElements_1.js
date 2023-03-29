function evenPositionElement(array){

    let allEvenPosition = []; // масив, в който да наливаме
    for (let i = 0; i < array.length; i++) { // минаваме през всяка позиция в масива
        if (i % 2 === 0) {// проверяваме дали позицията е четна или нечетна
            allEvenPosition.push(array[i]); // ако е четна я пушваме в новия масив
        }
    }

    console.log(allEvenPosition.join(` `))
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10'])