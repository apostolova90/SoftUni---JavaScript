function circleArea(input){

    let result;
    let type = typeof(input);

    if (type === "number"){
        result = Math.pow(input, 2) * Math.PI; // The Math.pow() static method returns the value of a base raised to a power.
        console.log (result.toFixed(2));
    } else {
        console.log (`We can not calculate the circle area, because we receive a ${type}.`)
    }
}
circleArea(5);
circleArea('name')