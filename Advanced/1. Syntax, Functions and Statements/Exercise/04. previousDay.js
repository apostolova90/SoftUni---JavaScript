function previousDay(year, month, day){

    let dateInput = `${year}-${month}-${day}`
    let date = new Date(dateInput)
    date.setDate(date.getDate()-1); // изваждаме тук 1 ден
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`); // +1, защото месеците започват от 0

}
previousDay(2016, 9, 30);
previousDay(2015, 5, 10)
