/* с тернален оператор: */


function lowerOrUpper(letter){

    let result = letter === letter.toUpperCase() ? `upper-case` : `lower-case`;

    console.log (result)
}
lowerOrUpper(`L`);
lowerOrUpper(`f`);




/* с IF: 

function lowerOrUpper(letter){

    if (letter === letter.toUpperCase()){
        console.log (`upper-case`);
    } else {
        console.log (`lower-case`);
    }

}
lowerOrUpper(`L`);
lowerOrUpper(`f`); */