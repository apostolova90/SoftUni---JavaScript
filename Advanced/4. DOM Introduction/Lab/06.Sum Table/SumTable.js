function sumTable() {
    let rows = document.querySelectorAll('tr td:nth-child(2n)');
    rows = Array.from(rows)
    .map(x => x.textContent)
    .map(Number)
    .reduce((x, y) => x + y);
    document.getElementById('sum').textContent = rows;
}


/* function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-child(2)');
    let sum = Array.from(costElements).reduce((a, x) => {
        let currentValue = Number(x.textContent) || 0;
        return a + currentValue;
    }, 0)

    let resultElement = document.getElementById('sum');
    resultElement.textContent = sum;
} */