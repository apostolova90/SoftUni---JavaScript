function garage(array) {
    let resultObj = {};
 
    for (let line of array) {
        let [garageNum, carInfo] = line.split(' - ');
        carInfo = carInfo.split(': ').join(' - ');
        if (resultObj.hasOwnProperty(garageNum)) {
            resultObj[garageNum].push(carInfo);
        } else {
            resultObj[garageNum] = [carInfo];
        }
    }
    let entries = Object.entries(resultObj);
    for (let line of entries) {
        let garageNum = line.shift();
        console.log(`Garage № ${garageNum}`);
        for (let carArr of line) {
            for (let carInfo of carArr) {
                console.log(`--- ${carInfo}`)
            }
        }
    }
}
garage()
garage()