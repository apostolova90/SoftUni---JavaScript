function onTimeForExam (input){
    const hourOfExam = Number(input[0]);
    const minutesOfExam = Number(input[1]);
    const hourOfArrival = Number(input[2]);
    const minutesOfArrival = Number(input[3]);

    const totalMinutesOfExam = hourOfExam * 60 + minutesOfExam;
    const totalMinutesOfArrival = hourOfArrival * 60 + minutesOfArrival;

    const difference = Math.abs(totalMinutesOfExam - totalMinutesOfArrival);
    const hourDiff = Math.floor(difference / 60);
    let minsDiff = difference % 60;

if (minsDiff === 0 || (minsDiff < 10 && hourDiff > 0)) {
    minsDiff = `0${minsDiff}`; 
}

if (totalMinutesOfArrival === totalMinutesOfExam) {
    console.log (`On time`);
}
else if (totalMinutesOfArrival > totalMinutesOfExam && difference < 60) {
    console.log (`Late`);
    console.log (`${minsDiff} minutes after the start`);
}
else if (totalMinutesOfArrival > totalMinutesOfExam && difference >= 60) {
    console.log (`Late`);
    console.log (`${hourDiff}:${minsDiff} hours after the start`);
}
else if (difference <= 30) {
    console.log (`On time`);
    console.log (`${minsDiff} minutes before the start`)
}
else if (difference > 30 && difference < 60) {
    console.log (`Early`);
    console.log (`${minsDiff} minutes before the start`)
}else{ 
    console.log (`Early`);
    console.log (`${hourDiff}:${minsDiff} hours before the start`)
    }
}
onTimeForExam (["14",
"00",
"13",
"55"])
;


/* function onTimeExam(input){
    let hourOfExam = Number(input[0]);
    let minutesOfExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minutesOfArrival = Number(input[3]);

    let totalMinutesOfExam = hourOfExam * 60 + minutesOfExam;
    let totalMinutesOfArrival = hourArrival * 60 + minutesOfArrival;

    let difference = Math.abs(totalMinutesOfExam - totalMinutesOfArrival);
 
    let hoursdifference = difference / 60;
    let minutesdifference = difference % 60;

    if (minutesdifference === 0 || (minutesdifference < 10 && hoursdifference > 0)){
        minutesdifference = `0${minutesdifference}`;
    }
    
    if (totalMinutesOfArrival > totalMinutesOfExam) {
        if (difference > 59) {
            console.log (`Late`);
            console.log (`${hoursdifference}:${minutesdifference} minutes after the start`);    
    } else {
        console.log (`Late`);
        console.log (`${difference} minutes after the start`);    
    }  
}

    if ((totalMinutesOfArrival <= totalMinutesOfExam) && (difference <= 30)) {
        console.log (`On time`);
        console.log (`${minutesdifference} minutes before the start`);
}

    if ((totalMinutesOfArrival < totalMinutesOfExam) && (difference > 30)){
        if (difference > 59) {
            console.log (`Early`);
            console.log (`${hoursdifference}:${minutesdifference} hours before the start`)
} else {
        console.log (`Early`);
        console.log (`${minutesdifference} minutes before the start`)
} 

    }
}
onTimeExam
(["11",
"30",
"8",
"12"]);






 */