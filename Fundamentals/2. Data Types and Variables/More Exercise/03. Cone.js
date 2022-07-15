
/* ДРУГ */

function cone(heigh, radius) {
    let s = Math.sqrt(heigh * heigh + radius * radius);
    let volume = (Math.PI * heigh * heigh * radius) / 3;
    let area = Math.PI * heigh * (heigh + s);
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
  }
  cone(3, 5);
  cone(3.3, 7.8);