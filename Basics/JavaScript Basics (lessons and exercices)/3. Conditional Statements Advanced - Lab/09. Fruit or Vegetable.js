function fruitOrVegatable (input) {
    const type = input[0];

    switch (type){
    case "banana":
    case "apple":
    case "kiwi":
    case "cherry":
    case "lemon": 
    case "grapes": console.log("fruit"); break;
    case "tomato":
    case "cucumber":
    case "pepper": 
    case "carrot": console.log("vegetable"); break;
    default: console.log ("unknown");
    }
}
fruitOrVegatable(["lemon"]);

// banana, apple, kiwi, cherry, lemon и grapes
// •	Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot
// •	Всички останали са "unknown"
