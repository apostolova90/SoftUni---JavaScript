function airPolution(mapAsArrOfStrings, commandsInArrOfStrings) {
  let mapAsArrOfArrs = [];

  for (let el of mapAsArrOfStrings) {
    el = el.split(" ").map(Number);
    mapAsArrOfArrs.push(el);
  }

  let commandsAsArrOfArrs = [];

  for (let el of commandsInArrOfStrings) {
    el = el.split(" ");
    commandsAsArrOfArrs.push(el);
  }

  for (let el of commandsAsArrOfArrs) {
    let command = el[0];

    if (command == "breeze") {
      let rawOfManipulation = Number(el[1]);
      mapAsArrOfArrs[rawOfManipulation] = mapAsArrOfArrs[rawOfManipulation].map(
        (el) => el - Math.min(el, 15)
      );
    } else if (command == "gale") {
      let colOfManipulation = Number(el[1]);
      for (let i = 0; i < mapAsArrOfArrs.length; i++) {
        mapAsArrOfArrs[i][colOfManipulation] -= Math.min(
          mapAsArrOfArrs[i][colOfManipulation],
          20
        );
      }
    } else if (command == "smog") {
      let valueOfIncreasingEveryElementOfTheMap = Number(el[1]);

      for (let i = 0; i < mapAsArrOfArrs.length; i++) {
        for (let j = 0; j < mapAsArrOfArrs[i].length; j++) {
          mapAsArrOfArrs[i][j] += valueOfIncreasingEveryElementOfTheMap;
        }
      }
    }
  }

  let polutedAreas = [];

  for (let i = 0; i < mapAsArrOfArrs.length; i++) {
    for (let j = 0; j < mapAsArrOfArrs[i].length; j++) {
      if (mapAsArrOfArrs[i][j] >= 50) {
        let polutedArea = `[${i}-${j}]`;
        polutedAreas.push(polutedArea);
      }
    }
  }

  if (polutedAreas.length > 0) {
    console.log(`Polluted areas: ${polutedAreas.join(", ")}`);
  } else {
    console.log("No polluted areas");
  }
}
airPolution(
  [
    "5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24",
  ],
  ["breeze 1", "gale 2", "smog 25"]
);
airPolution(
  [
    "5 7 3 28 32",
    "41 12 49 30 33",
    "3 16 20 42 12",
    "2 20 10 39 14",
    "7 34 4 27 24",
  ],
  ["smog 11", "gale 3", "breeze 1", "smog 2"]
);
airPolution(
  ["5 7 2 14 4", "21 14 2 5 3", "3 16 7 42 12", "2 20 8 39 14", "7 34 1 10 24"],
  ["breeze 1", "gale 2", "smog 35"]
);
