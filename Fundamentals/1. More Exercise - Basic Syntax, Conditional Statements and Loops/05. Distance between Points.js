function distanceBetweenPoints(x1,y1,x2,y2){

    let a = x2 - x1;
    let b = y1 - y2;

    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    console.log(c);
    
}
distanceBetweenPoints(2, 4, 5, 0)
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)