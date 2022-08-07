function trapezoid(input){
const ab = Number(input[0]);
const cd = Number(input[1]);
const h = Number(input[2]);
const formula = (ab + cd) * h / 2;
console.log (formula.toFixed(2));
}

trapezoid(["8","13","7"]);