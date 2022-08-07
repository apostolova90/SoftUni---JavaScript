// АЗ

function secretChat(array){

    let string = array.shift();   //взимаме първата част върху която ще работим
  
    for (let i = 0; i < array.length; i++){ //въртим през всеки елемент от масива
      let tokens = array[i].split(":|:") // и разделяме отделните части на елемента
      let command = tokens[0]; // и записваме всяки един от тях под отделна променлива
      
      if (command === "Reveal"){
        break;
      }
  
      if (command === "ChangeAll"){   // заменям (change) всички инстанции от дадено нещо, с друго
        let substring = tokens[1];
        let replacement = tokens[2];
        while(string.includes(substring)){
            string = string.replace(substring, replacement);
        }
        console.log(string);
      }
  
      if (command === "InsertSpace"){ // добавяме дадено нещо на определено място в думата
        let index = Number(tokens[1]);
        let firstPart = string.substring(0, index);
        let secondPart = string.substring(index, string.length)
        string = firstPart + " " + secondPart
        console.log(string);
      }
  
      if (command === "Reverse"){ // отделяме, завъртаме (REVERSE) и добавяме отново, определена част от текста 
        let substring = tokens[1]
            if (string.includes(substring)) { // ако определан част присъства в текста
                let firstIndex = string.indexOf(substring); // намираме старт индекса - от който започва в текста
                let lastIndex = firstIndex + substring.length; // намираме end индекса - на който завършва
                let firstPart = string.substring(0, firstIndex); // оделяме първата част 
                let secondPart = string.substring(lastIndex, string.length); // отделяме втората част 
                let reversed = substring.split('').reverse().join(''); // сплитваме, завъртаме и пак събраме елемнтите от останалия текст в substring
                string = firstPart + secondPart + reversed;
                console.log(string);
            } else {
                console.log("error");
            }
        }

    }
  
    console.log(`You have a new text message: ${string}`);
  
  }
  secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'])
    
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])






// АЗ

/* function secretChat(array){

  let message = array.shift();

  for (let i = 0; i < array.length; i++){
    if (array[i] === "Reveal"){
      break;
    }

    let tokens = array[i].split(":|:");
    let command = tokens[0];

    if (command === "ChangeAll"){
      let substring = tokens[1];
      let replacement = tokens[2];
      while (message.includes(substring)){
        message = message.replace(substring, replacement);
      }
      console.log(message);
    }
    
    if (command === "Reverse"){
      let substring = tokens[1];
      if (message.includes(substring)){
        let firstIndex = message.indexOf(substring); // намираме старт индекса - от който започва в текста
        let lastIndex = firstIndex + substring.length; // намираме end индекса - на който завършва
        let firstPart = message.substring(0, firstIndex); // оделяме първата част 
        let secondPart = message.substring(lastIndex, message.length); // отделяме втората част 
        let reversed = substring.split('').reverse().join('');
        message = firstPart + secondPart + reversed;
        console.log(message);
      } else {
        console.log("error");
      }
    }

    if (command === "InsertSpace"){
      let index = Number(tokens[1]);
      let firstPart = message.substring(0, index);
      let secondPart = message.substring(index, message.length);
      message = firstPart + " " + secondPart;
      console.log(message);
    }
  }
  console.log(`You have a new text message: ${message}`);
}
secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'])
  
console.log("________________")

secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal']) */
