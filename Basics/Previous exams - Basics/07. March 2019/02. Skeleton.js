function skeleton(input) {

    let minutesForKontrola = Number(input[0]);
    let sekundiForKontrola = Number(input[1]);


    let raztoqnieUlei = Number(input[2]);

    let totalKontrolaInSeconds = minutesForKontrola * 60 + sekundiForKontrola;
    let moreTimeNeeded = (raztoqnieUlei / 120) * 2.5;

    let secondsFor100Meeters = Number(input[3]);
    let totalTimeMartin = ((raztoqnieUlei / 100) * secondsFor100Meeters) - moreTimeNeeded; 

let difference = Math.abs(totalKontrolaInSeconds - totalTimeMartin);

if (totalTimeMartin <= totalKontrolaInSeconds){
    console.log("Marin Bangiev won an Olympic quota!");
    console.log(`His time is ${totalTimeMartin.toFixed(3)}.`);
} else {
    console.log(`No, Marin failed! He was ${difference.toFixed(3)} second slower.`);
    }
}
skeleton(["2", "12", "1200", "10"]);
skeleton(["1", "20", "1546", "12"]);
