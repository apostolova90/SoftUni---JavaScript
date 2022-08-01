function theImitationGame(array){

  let string = array.shift();   //взимаме първата част върху която ще работим
  
  for (let i = 0; i < array.length; i++){ //въртим през всеки елемент от масива
    let tokens = array[i].split("|") // и разделяме отделните части на елемента
    let command = tokens[0]; // и записваме всяки един от тях под отделна променлива
    
    if (command === "Decode"){
      break;
    }

    if (command === "ChangeAll"){   // заменям (change) всички инстанции от дадено нещо, с друго
      let substring = tokens[1];
      let replacement = tokens[2];
      while (string.includes(substring)){ // задължително с WHILE, за да мине през всички букви, ав слуяай че някоя се повтаря повече от 1 път
        string = string.replace(substring, replacement)
        // string = string.split(substring).join(replacement) // или така, което си е абсолютно същото!
      }
    }

    if (command === "Insert"){  // добавяме дадено нещо на определено място в думата
      let index = Number(tokens[1]);
      let value = tokens[2];
      let firstPart = string.substring(0, index); // substring разделя стринга на две, като в случая започва от нулева позиция и продължава до дадения индекс
      let secondPart = string.substring(index, string.length); // substring разделя стринга на две, като в случая започва от дадения индекс и продължава до края на стринга
      string = firstPart + value + secondPart
  
    }

    if (command === "Move"){ // местим определена част от думата на друго място в думата
      let index2 = Number(tokens[1]);
      let firstPart = string.substring(0, index2)
      let secondPart = string.substring(index2, string.length)
      string = secondPart + firstPart
    }
  }

  console.log(`The decrypted message is: ${string}`)

}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame(["owyouh","Move|2","Move|3","Insert|3|are","Insert|9|?","Decode"]);
















//АЗ + споделена с колегите


/* function theImitationGame(array) {
  let message = array.shift(); //взимаме първата част върху която ще работим

  for (let line of array) {
    //въртим през всеки елемент от масива
    let lineInfo = line.split("|"); // и разделяме отделните части на елемента
    let command = lineInfo[0]; // и записваме всяка една от тях под отделна променлива
    let first = lineInfo[1];
    let second = lineInfo[2];

    if (command === "Decode") {
      break;
    }

    switch (command) {
      case "ChangeAll": // заменям всички инстанции от дадено нещо, с друго
        while (message.includes(first)) {
          message = message.replace(first, second);
        }
        break;
      case "Insert":
        let index = Number(first);
        let firstPart = message.substring(0, index); // substring разделя стринга на две, като в случая започва от нулева позиция и продължава до дадения индекс
        let secondPart = message.substring(index, message.length); // substring разделя стринга на две, като в случая започва от дадения индекс и продължава до края на стринга
        message = firstPart + second + secondPart;
          //            let index = Number(first);
          //  let messageArray = message.split('')
          //  messageArray.splice(index, 0, second);
          //  message = messageArray.join()
        break;
      case "Move":
        let index2 = Number(first);
        let partOne = message.substring(0, index2); //отделяме първата част от стринга
        let partTwo = message.substring(index2, message.length); //отделяме втората част от стринга
        message = partTwo + partOne; // събираме втората + първата част 
        break;
    }
  }

  console.log(`The decrypted message is: ${message}`);

}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
theImitationGame(["owyouh","Move|2","Move|3","Insert|3|are","Insert|9|?","Decode",]); */