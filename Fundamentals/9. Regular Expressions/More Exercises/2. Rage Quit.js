function rageQuit(input = []) {
    const text = input.join('');
    const patternForDigits = /\d+/g;
    const patternForSymbols = /[^0-9]+/g;
      
    const digitsMatch = text.match(patternForDigits); // проверяваме дали стринга отговаря на patternForDigits regex-a
        // и ако отговаря запазваме под digitsMatch всичко, което отговаря - (3) ['2', '5', '1']
    const rageMessage = text.match(patternForSymbols) // проверяваме дали стринга отговаря на patternForSymbols regex-a и ако отговаря запазваме под rageMessage всичко, което отговаря, като го променяме какво следва:
      .map(symbol => symbol.toUpperCase() // превръщаме всчка буква, в голяма,
      .repeat(digitsMatch.shift())) // умножаваме я по числото в digitsMatch
      .join(''); // събираме по празно място
      
    const uniqueSymbols = new Set(rageMessage).size; // взимаме размера на стринга
      
console.log(`Unique symbols used: ${uniqueSymbols}`);
console.log(rageMessage);

}    
rageQuit(['a3']);
rageQuit(['aSd2&5s@1']);
rageQuit(["e-!btI17z=E:DMJ19U1Tvg VQ>11P'qCmo.-0YHYu~o%/%b.}a[=d15fz^'{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{D'xi]-~17 *%p'%|N>zq@ %xBD18<Y(fHh`@gu#Z#p'Z<v13fI]':\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15"]);
      