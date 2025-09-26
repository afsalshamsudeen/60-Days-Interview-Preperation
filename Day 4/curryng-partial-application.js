// partial application

function sum(a){
    return function(b, c){
        return a + b + c;
    }
}

const variable = sum(10);

console.log(variable(5, 6));
console.log(sum(1)(6, 8));