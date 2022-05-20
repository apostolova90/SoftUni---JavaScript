function moving(input) {
  
    const aRoom = Number(input[0]);
    const bRoom = Number(input[1]);
    const hRoom = Number(input[2]);
    let spaceApartment = aRoom * bRoom * hRoom;

    let index = 3;
    let command = input[index];
    index++

    while (command !== "Done") {
    let boxes = Number(command);
    spaceApartment -= boxes

    if (spaceApartment < 0) {
        console.log(`No more free space! You need ${Math.abs(spaceApartment)} Cubic meters more.`);
        break;
    }
    command = input[index];
    index++;  
    }

    if (command === "Done") {
        console.log(`${Math.abs(spaceApartment)} Cubic meters left.`);
    }
}
moving(["10","10","2","20","20","20","20","122"]);
moving(["10","1","2","4","6","Done"]);
