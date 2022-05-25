function reverseString(input) {
              
    let string = '';
    
    for (let i = input.length - 1; i >= 0; i--) {
        string = string + input[i];
    }

    console.log (string);
    
    } 
    reverseString(`Hello`);
    reverseString(`SoftUni`);
    reverseString(`12345`);

