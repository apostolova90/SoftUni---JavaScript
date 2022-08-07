function cinemaTickets(input){

    let index = 0;
    let inputLine = input[index];
    let countStandart = 0;
    let countKid = 0;
    let countStudent = 0; 

    while (inputLine !== "Finish"){
        let movieName = inputLine;
        index++;
        let allTickets = Number(input[index]);
        let freeSpaceInTheCinema = allTickets;
        index++;
        let ticketType = input[index];
        
        while(ticketType !== "End") {
            switch (ticketType) {
                case "standard":
                    countStandart++
                break;
                case "kid":
                    countKid++
                break;
                case "student":
                    countStudent++
                break;
            }
            freeSpaceInTheCinema--;
            if (freeSpaceInTheCinema === 0){
                break;
            }
            index++
            ticketType = input[index];
        }
        let boughtTickets = allTickets - freeSpaceInTheCinema;
        let peresentageFull = boughtTickets / allTickets * 100;
        console.log(`${movieName} - ${peresentageFull.toFixed(2)}% full.`);
        index++;
        inputLine = input[index];
    }
    let allBoughtTickets = countStandart + countKid + countStudent;
    console.log(`Total tickets: ${allBoughtTickets}`);
    console.log(`${(countStudent / allBoughtTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandart / allBoughtTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKid / allBoughtTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi","10","standard","kid","student","student","standard","standard","End","Scary Movie","6","student","student","student","student","student","student","Finish"]);


/* cinemaTickets(["The Matrix","20","student","standard","kid","kid","student","student","standard","student","End","The Green Mile","17","student","standard","standard","student","standard","student","End","Amadeus","3","standard","standard","standard","Finish"]); */