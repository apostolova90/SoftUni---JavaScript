function radioCrystals(arr) {

    for (let i = 1; i < arr.length; i++) {
        let target = arr[0];
        let chunk = arr[i];

        console.log(`Processing chunk ${chunk} microns`);

        if (chunk >= 4 * target) {
            let startThickness = chunk;
            let cuttings = 0;
            while (startThickness >= 4 * target) {
                startThickness /= 4;
                cuttings++;
            }
            chunk = Math.floor(startThickness);

            console.log(`Cut x${cuttings}\nTransporting and washing`);
        }

        if (chunk >= target * 1.20) {
            let startThickness = chunk;
            let lapping = 0;

            while (startThickness >= target * 1.20) {
                startThickness *= 0.80;
                lapping++;
            }
            chunk = Math.floor(startThickness);

            console.log(`Lap x${lapping}\nTransporting and washing`);
        }

        if (chunk >= target + 20) {
            let startThickness = chunk;
            let grindings = 0;
            while (startThickness >= target + 20) {
                startThickness -= 20;
                grindings++;
            }
            chunk = Math.floor(startThickness);

            console.log(`Grind x${grindings}\nTransporting and washing`);
        }

        if (chunk >= target + 2) {
            let startThickness = chunk;
            let etchings = 0;
            while (startThickness > target) {
                startThickness -= 2;
                etchings++;
            }
            chunk = Math.floor(startThickness);

            console.log(`Etch x${etchings}\nTransporting and washing`);
        }

        if (chunk == target - 1) {
            let startThickness = chunk;
            let xRayings = 0;
            if (startThickness == target - 1) {
                chunk = startThickness + 1;
                xRayings++;
            }
            console.log(`X-ray x${xRayings}`);
        }
        console.log(`Finished crystal ${chunk} microns`);
    }
}
radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);