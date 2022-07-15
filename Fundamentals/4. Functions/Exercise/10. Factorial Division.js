function factorialDivisions(a,b) {

        function factorial(num) {
            if (num === 0 || num === 1){
                return 1;
        } else {
            return num * factorial(num - 1);
        }
        }
        return result = (factorial(a) / factorial(b)).toFixed(2);


}
console.log(factorialDivisions(5, 2));
console.log(factorialDivisions(6, 2));