function lastKNumbersSequence(n, k) {
    let result = [1];
    while (result.length !== n) {
        result.push(result.slice(-k).reduce((a, b) => a + b));
    }

    return result
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2)