function solve() {

  let firstParameterElement = document.getElementById('text'); // достъпваме първия елемент
  let secondParameterElement = document.getElementById('naming-convention') // достъпваме втория елемент

  let text = firstParameterElement.value; // взимаме СТОЙНОСТТА, която има първия елемент (тя винаги е стринг)
  let convention = secondParameterElement.value; // взимаме СТОЙНОСТТА, която има първия елемент (тя винаги е стринг)
  let result = '';

  // правим проверка каква е конвенцията и превим промените
  if (convention === 'Camel Case'){
    for (let i = 0; i < text.length; i++){ // минаваме през всяка буква в текста
      if(text[i] === ' '){ // ако има празен елемент
        result += text[i+1].toUpperCase(); // минаваме на следващия елемент(индекс) и го правим главен
        i++
      } else { // ако елемЕнта не е празно място
        result += text[i].toLowerCase(); // оставаме на същия индекс и го правим малък
      }
    }
  } else if (convention === 'Pascal Case'){
    result += text[0].toUpperCase(); // правим първата буква главна
    for (let i = 1; i < text.length; i++){ // минаваме през всяка следваща буква в текста
      if(text[i] === ' '){ // ако има празен елемент
        result += text[i+1].toUpperCase(); // минаваме на следващия елемент(индекс) и го правим главен
        i++
      } else { // ако елемнта не е празно място
        result += text[i].toLowerCase(); // оставаме на същия индекс и го правим малък
      }
    }
  } else {
    result = "Error!";
  }

  document.getElementById('result').textContent = result; // взимаме дадения елемЕнт, задаваме му стойността "result" и принтираме стойността
}