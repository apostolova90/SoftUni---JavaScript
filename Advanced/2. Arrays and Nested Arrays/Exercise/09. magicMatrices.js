function magicMatrices(array){

    let sum = array[0].reduce((a,b)=>a+b);
    
    for (let i = 0; i < array[0].length; i++) {

        let currentCol = 0;
        for (let j = 0; j < array.length; j++){
            currentCol += array[j][i];
        }

        if (currentCol !== sum){
            return false;
        }
    }

    return true
}
magicMatrices([
    [4, 5, 6], 
    [6, 5, 4], 
    [5, 5, 5]]);

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])