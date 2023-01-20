// Another



function rectangle(width, height, color) {
    let colorArr = color.split('');
    let firstChar = colorArr[0].toUpperCase();
    colorArr.splice(0, 1, firstChar);
    color = colorArr.join('');
    let resultObj = {
        width: width,
        height: height,
        color: color,
        calcArea: function () {
            return this.width * this.height;
        }
    }
    return resultObj;
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

