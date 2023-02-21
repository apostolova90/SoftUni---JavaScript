function calculator() {
    
    let inpu1;
    let inpu2;
    let result;

    function init(selector1, selector2, resultSelector){
        inpu1 = document.querySelector(selector1);
        inpu2 = document.querySelector(selector2);
        result = document.querySelector(resultSelector);
    }

    function add(){
        result.value = Number(inpu1.value) + Number(inpu2.value);
    }

    function subtract(){
        result.value = Number(inpu1.value) - Number(inpu2.value);
    }

    return obj = {
        init,
        add,
        subtract
    };
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 







// Another with     this

/* function calculator() {
    function init(selector1, selector2, resultSelector) {
        this.num1 = document.querySelector(selector1);
        this.num2 = document.querySelector(selector2);
        this.result = document.querySelector(resultSelector);
    }

    function add() {
        this.result.value = Number(this.num1.value) + Number(this.num2.value);
    }

    function subtract() {
        this.result.value = Number(this.num1.value) - Number(this.num2.value);
    }

    return {
        init,
        add,
        subtract
    };
} */
