function timeToWalk(steps, footPrint, speedKmH){

    let distance = steps * footPrint;
    let speed = speedKmH * 1000 / 3600;
    let breaks = Math.floor(distance / 500) * 60;
    let time = (distance / speed) + breaks;

    let hours = Math.floor(time / 3600).toFixed().padStart(2, "0"); //за да получим часовете и да добавя по 1 0 отпред, докато не стигне до 10
    let minutes = Math.floor(time / 60).toFixed().padStart(2, "0"); //за да получим минутите
    let seconds = Math.ceil(time % 60); //за да получим секундите

    console.log(`${hours}:${minutes}:${seconds}`)
}
timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)