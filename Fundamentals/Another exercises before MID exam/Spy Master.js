function spyMaster(inputStrings) {
    let pattern = `(\\s|^)(${inputStrings[0]}\\s+)([A-Z!%$#]{8,})(\\.|\\,|\\s|$)`
    let rgx = new RegExp(pattern, 'gi')
    for (var index = 1; index < inputStrings.length; index++) {
        var element = inputStrings[index];
        let match;
        while (match = rgx.exec(element)) {
            let matchedWord = match[3]
            if (matchedWord.toUpperCase() !== matchedWord) {
                continue
            }

            let matchedWordIndex = match[5]

            let wholeMatch = match[0]
            let modifiedMatch = match[1] + match[2] + decodeWord(matchedWord) + match[4]
            element = element.replace(wholeMatch, modifiedMatch)
        }
        console.log(element)
    }

    function decodeWord(matchedWord) {
        while (matchedWord.indexOf('!') !== -1) {
            matchedWord = matchedWord.replace('!', '1')
        }

        while (matchedWord.indexOf('%') !== -1) {
            matchedWord = matchedWord.replace('%', '2')
        }

        while (matchedWord.indexOf('#') !== -1) {
            matchedWord = matchedWord.replace('#', '3')
        }

        while (matchedWord.indexOf('$') !== -1) {
            matchedWord = matchedWord.replace('$', '4')
        }

        matchedWord = matchedWord.toLowerCase()

        return matchedWord
    }


}
spyMaster(['specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'

])