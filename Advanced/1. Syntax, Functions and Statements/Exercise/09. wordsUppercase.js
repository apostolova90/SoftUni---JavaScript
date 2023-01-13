function wordsUppercase(string) {

 //  regex    -  ((/\w+/g))
 //   +    
 //  errow функция     -   word => word.toUpperCase()).join(', ')
    console.log(string.match(/\w+/g).map(word => word.toUpperCase()).join(', '));

}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello')