
// Another

function evenPositionElement(array){

    let allEvenPosition = ''; 
    for (let i = 0; i < array.length; i++) { 
        if (i % 2 === 0) {
            allEvenPosition += array[i] + ' ';
        }
    }

    console.log(allEvenPosition)
}
evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10'])