function adAstra(arr){

    let pattern = /(?<delimiter>\#|\|)(?<food>[A-Za-z\s]+)\1(?<exp>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let items = [];
    let totalCalories = 0;
    let dailyIntake = 2000;
    let match = pattern.exec(arr[0])

    while (match !== null){
        let food = match.groups['food'];
        let exp = match.groups['exp'];
        let cal = Number(match.groups['calories']);

        totalCalories += cal

        items.push(`Item: ${food}, Best before: ${exp}, Nutrition: ${cal}`)
        match = pattern.exec(arr[0])
    }

    if (totalCalories < dailyIntake){
        console.log('You have food to last you for: 0 days!')
    } else {
        console.log(`You have food to last you for: ${Math.floor(totalCalories / dailyIntake)} days!`);

        for (let line of items){

            console.log(line)
        }
    }
    console.log()

}
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
console.log('-------------')
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
console.log('-------------')
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);


// Another

/* function adAstra(arr) {

    let regex = /(\||\#)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/gm;
    let items = [];
    let totalCalories = 0;

    while ((validItems = regex.exec(arr[0])) !== null) {
        let name = validItems.groups.name;
        let date = validItems.groups.date;
        let calories = validItems.groups.calories;
        items.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
        totalCalories += Number(calories);
    }

    let days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);

    for (let item of items) {
        console.log(item);
    }
}

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']) */