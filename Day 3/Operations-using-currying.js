function evaluate(operation){
    var op = operation.toLowerCase();
    return function(a){
        return function(b){
            if(op === "sum") console.log(a + b) ;
            else if(operation === "multiply") console.log(a * b);
            else if(operation === "division") console.log(a / b);
            else if (operation === "substraction") console.log(a - b);
            else return "Invalid Operation";
        }
    }
}

const add = evaluate("Sum");
const mult = evaluate("multiply");
const div = evaluate("division");
const sub = evaluate("substraction");

add(4)(2);
mult(4)(2);
div(4)(2);
sub(4)(2);