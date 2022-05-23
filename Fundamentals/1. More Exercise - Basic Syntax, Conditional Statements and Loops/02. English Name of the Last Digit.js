function login(input) {
              
    let index = 0;
    let username = input[index];
    index++;
    let password = '';
    
    for (let i = username.length-1; i >= 0; i--) {
        password = password + username[i];
    }

    console.log (password);
    
    } 
    login(["Hello"]);
    login(["SoftUni"]);
    login(["12345"]);

