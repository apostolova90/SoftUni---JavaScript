
// Another 

function softuniBarIncome(arr) {

    let regex = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/;

    let total = 0;

    for (let i = 0; i, arr.length; i++) {
        if (arr[i] === "end of shift") {
            break;
        }
        if ((validPattern = regex.exec(arr[i])) !== null) {
            let name = validPattern.groups.name;
            let product = validPattern.groups.product;
            let count = Number(validPattern.groups.count);
            let price = Number(validPattern.groups.price);
            let sum = Number(count * price);
            console.log(`${name}: ${product} - ${sum.toFixed(2)}`);
            total += sum;
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}

softuniBarIncome([
'%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])

softuniBarIncome([
'%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])