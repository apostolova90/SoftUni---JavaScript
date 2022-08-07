function cake(input) {
    let index = 2;
    let width = input[0];
    let length = input[1];
    let piecesOfCake = width * length;
    let command = input[index];
    index++
   
    
    while (command !== "STOP"){
        let eatenPieces = Number(command);
        piecesOfCake -= eatenPieces

        if(piecesOfCake <= 0){
            console.log(`No more cake left! You need ${Math.abs(piecesOfCake)} pieces more.`);
            break;  
        } 
            
        command = input[index];
        index++;
        
            
    }
    
    if (command === "STOP"){
                   
        console.log(`${piecesOfCake} pieces are left.`);
    }
}
    
cake(["10", "10", "20", "20", "20", "20", "STOP"]);