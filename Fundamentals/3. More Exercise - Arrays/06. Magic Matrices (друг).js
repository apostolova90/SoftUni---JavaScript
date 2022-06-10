function magicMatrices(arr) {
  let n = arr.length;
  let array;
  let sumFirstRow = 0;
  for (let i = 0; i < 1; i++) {
    array = arr[i];
    for (let j = 0; j < n; j++) {
      let index = array[j];
      sumFirstRow += index;
    }
  } //това е само първия ред по който ще сравняваме
  let sum;
  for (let i = 0; i < n; i++) {
    sum = 0;
    array = arr[i];
    for (let j = 0; j < n; j++) {
      let index = array[j];
      sum += index;
    }
    if (sum !== sumFirstRow) {
      console.log("false");
      return;
    }
  } //това са сумите на редовете
  for (let i = 0; i < n; i++) {
    sum = 0;
    for (let j = 0; j < n; j++) {
      array = arr[j];
      let index = array[i];
      sum += index;
    }
    if (sum !== sumFirstRow) {
      console.log("false");
      return;
    }
  } //това са сумите на колоните
  console.log("true");
}
magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
