
// друг


/* function fancyBarcodes(arr) {

    let count = Number(arr.shift());

    let regex = /(\@)(\#{1,})[A-Z]([a-zA-Z0-9]{4,})[A-Z]\1(\#{1,})/;

    for (let i = 0; i < count; i++) {
        let group = '';
        if ((valid = regex.exec(arr[i])) !== null) {
            for (let char of valid[0]) {
                if (char >= 0 && char <= 9) {
                    group += char;
                }
            }
            if (group.length > 0) {
                console.log(`Product group: ${group}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]) */




// Another

/* function fancyBarcodes(input) {
    let numberOfBarcodes = Number(input.shift());
    for (let i = 0; i < numberOfBarcodes; i++) {
        let pattern = /@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+/gm;
        let match = pattern.exec(input[i]);
        if (!match) {
            console.log(`Invalid barcode`)
        }
        while (match !== null) {
            let productGroup = [];
            for (let char of match[0]) {
                if ((char.charCodeAt(0) >= 48) && (char.charCodeAt(0) <= 57)) {
                    productGroup.push(char);
                }
            }
            if (productGroup.length === 0) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${productGroup.join("")}`)
            }
            match = pattern.exec(input[i])
        }
    }
}
fancyBarcodes([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);
console.log('---');
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"
]); */