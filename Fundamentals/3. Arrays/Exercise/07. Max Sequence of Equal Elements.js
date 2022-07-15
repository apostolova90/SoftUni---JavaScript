function maxSequenceOfEualElements(array){

    let maxSequence = [];

    let arrayL = array.length

    for (let i = 0; i < arrayL; i++) { // цикъл грижещ се за преминаване през целия цикъл
        let currentSequence = []; //държи ВРЕМЕННО най-дългия масив
        for (let j = i; j < arrayL; j++) { // цикъл който се грижи за преминаването от текущото число на дясно
            if (array[i] === array[j]){ //проверяваме дали числата на първи и втори индекс са с еднаква стойност
                currentSequence.push(array[i])
            } else {
                break;
            }
        }
        if (currentSequence.length > maxSequence.length){
            maxSequence = currentSequence
        }
    }
    console.log(maxSequence.join(' '))
}
    
maxSequenceOfEualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEualElements([4, 4, 4, 4])
maxSequenceOfEualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])
