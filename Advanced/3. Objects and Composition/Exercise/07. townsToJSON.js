
// Another

function townsToJSON(array) {
    let resultArr = [];
    let patternSplit = /[ ]?[\|][ ]?/gm
    for (let i = 1; i < array.length; i++) {
        let line = array[i];
        let tokens = line.split(patternSplit)
        let town = tokens[1];
        let latitude = Number(tokens[2]);
        let longitude = Number(tokens[3]);
        let obj = {
            Town: town,
            Latitude: Number(latitude.toFixed(2)),
            Longitude: Number(longitude.toFixed(2))
        }
        resultArr.push(obj);
    }
    console.log(JSON.stringify(resultArr));
}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)