function cookingByNumbers(num, p1, p2, p3, p4, p5){

    let inputAsNumber = Number(num);
    let arrOfCommands = [p1, p2, p3, p4, p5]; // обединявам всички команди в масив, за да мога да въртя през тях

    for (let i = 0; i < arrOfCommands.length; i++) {
        let currentCommand = arrOfCommands[i]
        
        switch(currentCommand){
            case "chop":
                inputAsNumber = inputAsNumber / 2;
                console.log(inputAsNumber)
                break;
            case "dice":
                inputAsNumber = Math.sqrt(inputAsNumber); 
                console.log(inputAsNumber)
                break;
            case "spice": 
                inputAsNumber = inputAsNumber + 1;
                console.log(inputAsNumber)
                break;
            case "bake":
                inputAsNumber = inputAsNumber * 3;
                console.log(inputAsNumber)
                break;
            case "fillet":
                inputAsNumber = inputAsNumber * 0.80;
                console.log(inputAsNumber)
                break;
        }
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')