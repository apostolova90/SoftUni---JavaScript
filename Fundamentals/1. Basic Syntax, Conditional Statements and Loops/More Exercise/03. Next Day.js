function days(year, month, day) {

  let date = new Date(year, month - 1, day + 1)

// OR:  let date = new Date(year, month - 1, day);
//     date.setDate(date. getDate() + 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`); // преобразуване на датата в цифри - 
    // от това Wed Jan 02 1901 00:00:00 GMT+0200 (Източноевропейско стандартно време)
    // в това 2016-10-1

}
days(2016, 9, 30);
days(2020, 3, 24);
days(1, 1, 1);



/* function solve(year, month, day) {
    let currentDate = new Date(year, month - 1, day); // get the date from the input so we can convert to milliseconds
    let milliseconds = currentDate.getTime(); // convert to milliseconds
    let oneDay = 86400000; // one day equals to 86400000 milliseconds
    let nextDay = milliseconds + oneDay; // adding one day to the passed date
    let nextDate = new Date(nextDay); // next day in iso format
    let formatted_date =
      nextDate.getFullYear() + '-' + (nextDate.getMonth() + 1) + '-' + nextDate.getDate(); // format
    console.log(formatted_date);
}
days(2016, 9, 30);
days(2020, 3, 24);
days(1, 1, 1); */