function housePainting (input){
    // HOUSE WALLS
    const xHouseHigh = Number(input[0]);
    const yHouseLenght = Number(input[1]);
    const hRoofHigh = Number(input[2]);

    const houseFrontWall = xHouseHigh * xHouseHigh;
    const houseBackWall = xHouseHigh * xHouseHigh;
    const houseFrontDoor = 1.2 * 2;
    const houseFrontWallTotal = houseFrontWall - houseFrontDoor;
    const houseFrontAndBackWallsTotal = houseBackWall + houseFrontWallTotal;
    
    const houseSideWall = xHouseHigh * yHouseLenght;
    const windowsSize = 1.5 * 1.5;
    const houseSideWallsTotal = (2 * houseSideWall) - (2 * windowsSize);
    
    const allWallsTotalSize = houseFrontAndBackWallsTotal + houseSideWallsTotal;
    const totalPaintNeededWalls = allWallsTotalSize / 3.4

    //ROOF 
    const roofRectangleSide = xHouseHigh * yHouseLenght;
    const roofRectangleSidesTotal = 2 * roofRectangleSide;
    
    const roofTriangleSide = xHouseHigh * hRoofHigh / 2;
    const roofTriangleSideTotal = 2 * roofTriangleSide;

    const allRoofSize = roofRectangleSidesTotal + roofTriangleSideTotal;
    const totalPaintNeededRoof = allRoofSize / 4.3

    console.log (totalPaintNeededWalls.toFixed(2));
    console.log (totalPaintNeededRoof.toFixed(2));
}

housePainting (["6", "10", "5.2"]);