function schoolGRades(array){

    let result = new Map();

    for (let line of array){
        let tokens = line.split(" ") //['Lilly', '4', '6', '6', '5']
        let name = tokens.shift();
        let setOfGrade = tokens;

        if (!result.has(name)){
            result.set(name, setOfGrade)
        } else {
            let oldSet = result.get(name);
            for(let grade of setOfGrade){
                oldSet.push(grade)
            }
            result.set(name, oldSet);
        }
    }

    // сортираме :
    let sortEntries = Array.from(result.entries()).sort(([keyA, valA], [keyB, valB]) => {
        return keyA.localeCompare(keyB)
    });

    for (let [key, value] of sortEntries) {
        let sumGrade = 0;
        for ( grade of value){
            sumGrade += Number(grade)
        }
        let avgGrade = sumGrade / value.length
        console.log(`${key}: ${avgGrade.toFixed(2)}`);
    }

}
schoolGRades([
'Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'
])

/* 
schoolGRades([
'Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3'
])
*/