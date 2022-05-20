function sleepyTom(input){
    let normaTimeForPlayMinutes = 30000;
    let holidays = Number(input[0]);
    let workingDays = 365 - holidays;

    let minutesPlayForAnYear = (holidays * 127) + (workingDays * 63);

    let diffrence = Math.abs(normaTimeForPlayMinutes - minutesPlayForAnYear);
    let hours = Math.floor(diffrence / 60);
    let minutes = diffrence % 60;

if (minutesPlayForAnYear > normaTimeForPlayMinutes){
    console.log (`Tom will run away`);
    console.log (`${hours} hours and ${minutes} minutes more for play`)
    }
else if (minutesPlayForAnYear < normaTimeForPlayMinutes){
    console.log (`Tom sleeps well`);
    console.log (`${hours} hours and ${minutes} minutes less for play`)
    }
}
sleepyTom (["113"]);