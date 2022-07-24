
function furniture(input){

    let text = input.join(' ');
    let furnitureArr = [];
    let totalSum = 0;
    let pattern = /[>]{2}(?<furniture>[A-Z][A-Za-z]+)[<]{2}(?<price>[\d.]+)!(?<quantity>(\d)+)/gm;
    let valid; // създаваме променлива (като match) без да подаваме стойност

    while ((valid = pattern.exec(text)) !== null){ //по този начин се избягва презаписване на стойността в цикъла на всяко завъртане

        let validName = valid.groups['furniture'];
        let validPrice = Number(valid.groups['price']);
        let validQuantity = Number(valid.groups['quantity']);

        furnitureArr.push(validName);
        totalSum += validPrice * validQuantity;
    }

    console.log('Bought furniture:');
    furnitureArr.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',    
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
);
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
);



// Another 

/* function furniture(arr) {

    let pattern = />>(?<item>[A-Za-z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/;
    let totalMoney = 0;
    console.log("Bought furniture:");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Purchase") {
            break;
        }
        if ((validPattern = pattern.exec(arr[i])) !== null) {
            let item = validPattern.groups['item'];
            let price = Number(validPattern.groups['price']);
            let quantity = Number(validPattern.groups['quantity']);
            console.log(item);
            totalMoney += price * quantity;
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);

}

furniture([
'>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])

furniture([
'>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']) */