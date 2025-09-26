// fibonacci sum using infinite currying

function sum(a){
    return function(b){
        if(b) return sum(a+b);
        return a;
    }
}




console.log(sum(0)(1)(1)(2)(3)(5)(8)(13)(21)())