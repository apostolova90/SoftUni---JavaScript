function login(input) {
              
    let index = 0;
    let username = input[index];
    index++;
    let password = '';
    
    for (let i = username.length-1; i >= 0; i--) {
        password = password + username[i];
        break;
    }

    if (password === "0") {
        console.log("zero")
    } else if (password === "1") {
        console.log("one")
    } else if (password === "2") {
        console.log("two")
    } else if (password === "3") {
        console.log("three")
    } else if (password === "4") {
        console.log("four")
    } else if (password === "5") {
        console.log("five")
    } else if (password === "6") {
        console.log("six")
    } else if (password === "7") {
        console.log("seven")
    } else if (password === "8") {
        console.log("eight")
    } else if (password === "9") {
        console.log("nine")
    }

    
    } 
    login(["512"]);
    login(["1"]);
    login(["1643"]);

