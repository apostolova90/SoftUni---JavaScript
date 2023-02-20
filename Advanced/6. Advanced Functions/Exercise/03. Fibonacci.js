// Closure

function getFibonator(){

    let a = 0;
    let b = 1;
    // let [a,b] = [0,1];   - друг начин за записване

    return () => { // връщаме функция
        let sum = a + b;
        // за да може при всяко завъртане да вземем следващите две числа, разменям стойностите:
        a = b;
        b = sum;
        return a;
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
