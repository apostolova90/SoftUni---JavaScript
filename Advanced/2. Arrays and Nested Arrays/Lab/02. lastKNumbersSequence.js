function lastKNumbersSequence(n, k) {
    let result = [1];
    while (result.length !== n) {
        result.push(result.slice(-k).reduce((a, b) => a + b));
    }

    return result
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2)











// Another
/* function solve(n, k) {
    const numbers = [1];
  
    generateNumber(numbers, n, k);
  
    return numbers;
  
    function generateNumber(numbers, n, k) {
      if (numbers.length < n) {
        const sum = numbers
          .slice(-k)
          .reduce((a, b) => a + b, 0);
  
        numbers.push(sum);
  
        generateNumber(numbers, n, k);
      }
    }
  }
console.log(solve(6, 3));
console.log(solve(8, 2)); */