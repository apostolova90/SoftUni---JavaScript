function train(arr) {
    let allWagons = arr.shift().split(" ").map(Number); //изрязваме първата част и я записваме като нов масив
    // и с .map()  казваме да превърне всичко в число
  
    let maxCapacity = Number(arr.shift())

    for (let i = 0; i < arr.length; i++) {
        let commandNum = arr[i].split(" ")
        
        if(commandNum[0] === "Add"){
            allWagons.push(Number(commandNum[1]))
        } else {
            for (let a = 0; a < allWagons.length; a++){
                if (Number(commandNum[0]) + allWagons[a] <=  maxCapacity){
                    allWagons[a] += Number(commandNum[0]);
                    break;
                }
        }
    }
}


    console.log(allWagons.join(" "))
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);
