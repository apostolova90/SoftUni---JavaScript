function solve() {
  let inputElement = document.getElementById('input');
  let textArray = inputElement.value.split('.').filter(s => s!== ''); // сплитваме инпута по ., като го превръщаме в масив   И   казваме всяко изречение, което не е празен стринг, да се връща от масива

  let resultDiv = document.getElementById('output');
  
  while(textArray.length > 0) {
    let text = textArray.splice(0, 3).join('. ') + '.'; // при всяко завъртаме, взимаме по 3 изречения (изрязваме ги)    И     ги съединявамепо '. '    И    слагаме . на края след трите изречения
    let p = document.createElement('p') // създаваме нов елемнт в HTML-a, като му казваме в случая да е параграф
    p.textContent = text;// и напълваме параграфа със съдържанието - тези 3 изречения, които отделихме горе
    resultDiv.appendChild(p); //закачаме/залепяме го в правилния контейнер
  }
}