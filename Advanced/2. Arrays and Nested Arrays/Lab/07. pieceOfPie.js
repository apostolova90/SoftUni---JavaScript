function pieceOfPie(array, firstFlavor, secondFlavor){

    let firstPosition = array.indexOf(firstFlavor);
    let secondPosition = array.indexOf(secondFlavor);

    let newArray = array.slice(firstPosition, secondPosition +1)

    return newArray
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');

pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie')