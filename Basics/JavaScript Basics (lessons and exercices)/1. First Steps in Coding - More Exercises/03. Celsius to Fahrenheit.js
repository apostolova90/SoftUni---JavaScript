function cToF (input){
    const celsius = Number(input[0]);
    const formula = celsius * (9/5) + 32;
    console.log (formula.toFixed(2));
}

cToF (["25"]);