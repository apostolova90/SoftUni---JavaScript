function areaOfFigures(input) {
    const type = (input[0])
    let result = ""
    const a = (input[1])

    if (type === "square") {
        result = a * a;
    } else if (type === "rectangle") {
        const b = Number(input[2]);
        result = a * b;
    } else if (type === "circle") {
        result = Math.PI * a * a;
    } else {
        const b = Number(input[2]);
        result = a * b / 2;
    
    }
    console.log(result.toFixed(3));

}

areaOfFigures(["triangle", "4.5", "20"])
