function triangle (input){
    const a = Number(input[0]);
    const h = Number(input[1]);
    const area = a * h / 2;

    console.log (area.toFixed(2))

}
triangle(["20", "30"]);