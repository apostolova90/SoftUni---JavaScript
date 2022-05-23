function reverseString(input) {
              
    let index = 0;
    let username = input[index];
    index++;
    let string = '';
    
    for (let i = username.length-1; i >= 0; i--) {
        string = string + username[i];
    }

    console.log (string);
    
    } 
    reverseString(["Hello"]);
    reverseString(["SoftUni"]);
    reverseString(["12345"]);

    ........................ как да махна тази нула