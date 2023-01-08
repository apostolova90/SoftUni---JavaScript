function stringLength (one, two, three){

    let oneLength = one.length;
    let twoLength = two.length;
    let threeLength = three.length;
    let evg = Math.floor((oneLength + twoLength + threeLength)/3)

    console.log(oneLength + twoLength + threeLength)
    console.log(evg)

}
stringLength ('chocolate', 'ice cream', 'cake')
stringLength ('pasta', '5', '22.3')