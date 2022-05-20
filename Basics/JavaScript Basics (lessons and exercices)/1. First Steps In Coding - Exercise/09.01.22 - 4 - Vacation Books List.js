function vacationBooksList(input){
    const totalPages = Number(input[0]);
    const pagesPerHour = Number(input[1]);
    const days = Number(input[2]);
    const totalHoursNeeded = totalPages / pagesPerHour 
    const HoursPerDay = totalHoursNeeded / days
    console.log (HoursPerDay)

 }
 
 vacationBooksList (["212", "20", "2"]);