function multiplyByTwo(input) {
  let n = input.length;
  let negative = Number.NEGATIVE_INFINITY;
 
  for (let i = 0; i <= n; i++) {
    let num = Number(input[i])
    if (num >= 0) {
      num = num * 2;
      console.log(`Result: ${num.toFixed(2)}`);
    } else if (num > negative) {
        console.log(`Negative number!`);
    }
}
}
multiplyByTwo (["12", "43.2144", "12.3", "543.23", "-20"]);
