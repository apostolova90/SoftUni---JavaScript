function bonusScoringSystem(arr) {

    let numberOfStudents = Number(arr.shift());
    let numberOfLectures = Number(arr.shift());
    let bonus  = Number(arr.shift());

    let maxNum = Number.MIN_SAFE_INTEGER;
    let newArray = [];    


    for (let i = 0; i < arr.length; i++){
        newArray.push(Number(arr[i]))     

    }

 for (let number of newArray) { //след това минаваме през всяко чиско в новия масив и търсим най-голямото
        if (number >= maxNum) {
            maxNum = number;
            
    }
}

let totalBonus = maxNum / numberOfLectures * (5 + bonus)

if( numberOfStudents == 0 || numberOfLectures == 0){
    console.log(`Max Bonus: 0.`);
    console.log(`The student has attended 0 lectures.`);
} else {
    console.log (`Max Bonus: ${Math.ceil(totalBonus)}.`)
    console.log (`The student has attended ${maxNum} lectures.`)
    }
}
bonusScoringSystem(["5", "25", "30", "12", "19", "24", "16", "20"]);
bonusScoringSystem(["10","30","14","8","23","27","28","15","17","25","26","5","18"]);
bonusScoringSystem(["0","0","0"]);
