// f(a, b) to f(a)(b)

function func(a){
    return function(b){
       return `${a} ${b}`
    }
}

console.log(func(9)(6));
