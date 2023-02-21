// рекурсия

function add(num){

    let sum = 0;

    function inner(number){ // вложена функция, която връща себе си

        sum+=number;
        return inner;
    }
    inner.toString = () =>{
        return sum;
    }

    return inner(num);

}
console.log(add(1)(6)(-3).toString());




// Another
/* function add(n) {
    const inner = function (a) {
        n += a;
        return inner;
    };
    inner.toString = function () {
        return n;
    };
    return inner;
} */