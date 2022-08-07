//Another


function santaSecretHelper(input) {
    const key = input.shift(); // взимаме 1ислото, с което след това ще трябва да намаляме 
    const pattern = /@(?<name>[A-Za-z]+)[^@!:>-]*!G!/;
  
    while (input[0] !== 'end') { // въртим до команда 'end'
      const encryptedMessage = input.shift(); // отделяме първия ред
      let decryptedMessage = '';
  
      for (const char of encryptedMessage) { // минаваме през всеки char в него и 1. го обръща в числото му равностойност от ASCII таблицата, 2. намаляме стойнстта му с key, 3. връщаме новата му стойност според ASCII таблицата
        decryptedMessage += String.fromCharCode(char.charCodeAt() - key);
      }
  
      const match = pattern.exec(decryptedMessage); // след това проверяваме дали отговаря на regex-a
  
      if (match) { // ако отговаря
        const name = match.groups.name; // принтираме
        console.log(name);
      }
    }
  }
  
  santaSecretHelper(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end']);
  santaSecretHelper(['3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end']);