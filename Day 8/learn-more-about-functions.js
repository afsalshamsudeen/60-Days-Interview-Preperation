function calc(a, b){
    console.log(a+b);
    return  a-b;
}

calc(2,5)
console.log(calc(8,2));

function check(name){
    const greet = function(){
        const sayBye  = function(){
            const again = function(){
                console.log("come again later " + name)
            }
            console.log("bye "+ name);
             return again;
        }
        console.log("hey "+ name);
         return sayBye;
    }
    return greet;
}
const myFunc =check('cassy')
const myFunc2 = myFunc()
const myFunc3 = myFunc2();
myFunc3()