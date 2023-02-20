// Global context

function randon(){
    console.log(this); // in browser it will be Window
    return Math.random();
}
randon(); // global invocation




// Object context

let obj = {
    name: 'Peter',
    greed() {
        console.log(`Hello! My name is ${this.name}`);
    }
}
obj.greed();  // method invocation
let greed = obj.greed; // copy functions by reference
greed() // Global invocation



// DOM Element - must execute in browser
/* element.addEventListener('click', function(){
    console.log(this);
}); 
*/