function cinema(input) {

    let totalSeats = Number(input[0])
    let index = 1;

    let command = input[index];
    index++
   
    let guests = 0;
    let pricePerTicket = 5;
    let pricePerGroup = 0;
    let totalIncome = 0; 

    while (command !== "Movie time!"){

        guests = Number(command);
        

        if (totalSeats < guests){
            console.log("The cinema is full.");
            console.log(`Cinema income - ${totalIncome} lv.`);
            break;
        }
        totalSeats -= guests;
        
        pricePerGroup += guests * pricePerTicket;

    if (guests % 3 === 0){
        pricePerGroup -= 5;
}
        
    totalIncome += pricePerGroup;
    pricePerGroup = 0;
    command = input[index];
    index++


}
    if (command === "Movie time!"){
        console.log(`There are ${totalSeats} seats left in the cinema.`);
        console.log(`Cinema income - ${totalIncome} lv.`);
    }

}
cinema(["60","10","6","3","20","15","Movie time!"]);
cinema(["50","15","10","10","15","5"]);
cinema(["100","10","10","10","10","10","10","10","10","10","10","Movie time!"]);