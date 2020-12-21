class calculator {
    static plus(a, b) {
        return a + b;
    }
    
    static minus(a, b) {
        return a - b;
    }
}

const calculator2 = {
    multiply: function(a, b) {
        return a * b;
    },

    divide: (a, b) => a/b
}

plus = calculator.plus(20,10);
minus = calculator.minus(20,10);
multiply = calculator2.multiply(20,10);
divide = calculator2.divide(20,10);

console.log(plus)
console.log(minus)
console.log(multiply)
console.log(divide)