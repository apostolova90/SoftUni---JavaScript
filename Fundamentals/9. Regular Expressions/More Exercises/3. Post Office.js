function postOffice(input) {
    let parts = input.shift().split('|');
    let firstPart = parts[0];
    let secondPart = parts[1];
    let thirdPart = parts[2];   
  
    const firstPattern = /([#$%*&])(?<letters>[A-Z]+)\1/g;
    const secondPattern = /(?<asciiCode>\d+):(?<length>\d{2})/g;
    const words = thirdPart.split(' '); // ['adsaArmyd', 'Gara', 'So', 'La', 'Arm', 'Armyw21', 'Argo', 'O', 'daOfa', 'Or', 'Ti', 'Sar', 'saTheww', 'The', 'Parahaos']
  
    const firstMatch = firstPattern.exec(firstPart); // (3) ['$AOTP$', '$', 'AOTP', index: 18, input: 'sdsGGasAOTPWEEEdas$AOTP$', groups: {…}]
    const capitalLetters = firstMatch.groups.letters.split(''); // (4) ['A', 'O', 'T', 'P']
  
    const wordsData = new Set(secondPart.match(secondPattern)); // 65:03, 79:01, 84:02, 80:07
  
    for (const letter of capitalLetters) { // завъртаме през глевните пукви в capitalLetters - ['A', 'O', 'T', 'P']
      let isTrue = false;
  
      for (const word of words) { // завъртаме през думите в words ['adsaArmyd', 'Gara', 'So', 'La', 'Arm', 'Armyw21', 'Argo', 'O', 'daOfa', 'Or', 'Ti', 'Sar', 'saTheww', 'The', 'Parahaos']
        if (letter === word[0]) { // ако буквата на която сме от words, съвпада с първата буква на думаната на която сме
          for (let wordData of wordsData) { // взимаме всяка вдойка числа от ascii таблицата - 65:03, 79:01, 84:02, 80:07
            let [ascii, length] = wordData.split(':'); // и ги запазваме под различна променлива
            ascii = Number(ascii); // правим го на номер
            length = Number(length) + 1; // правим го на номер и добавяме единица към дължината, защото:
                                    // 65:03 - 65 отговаря на главна буква от ASCII таблицата, а 03 е за броя на амалките букви след нея. За да получим length-a на думата, трябва да добавим и 1 (за главната буква)
            
            if (word.length === length && word.charCodeAt(0) === ascii) {
              console.log(word);
              wordsData.delete(wordData);
              isTrue = true;
              break;
            }
          }
        }
  
        if (isTrue) {
          break;
        }
      }
    }
  }
  
  postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos']);
  postOffice(['Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig']);
  