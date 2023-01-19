//Another


function equalNeighbors(matrix) {
    let pairsCounter2 = 0;
    matrix.forEach((_, i, matrix) => {
        matrix[i].forEach((_, j) => {
            if (j < matrix[i].length - 1) {
                if (matrix[i][j] === matrix[i][j + 1]) {
                    pairsCounter2++;
                };
            };
        });
    });
    matrix.forEach((_, k, matrix) => {
        matrix[k].forEach((_, l) => {
            if (k < matrix.length - 1) {
                if (matrix[k][l] === matrix[k + 1][l]) {
                    pairsCounter2++;
                };
            };
        });
    });
    console.log(pairsCounter2);
}
equalNeighbors([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

equalNeighbors([
['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])