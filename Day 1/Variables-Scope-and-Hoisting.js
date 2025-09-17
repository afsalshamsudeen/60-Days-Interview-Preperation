function sample(){
    var a = 20;
    console.log(a);
    if(a==20){
        let b =30;
        var c =40;
        console.log("number in b from inside the block:"+b);
    }
    //console.log(b); this b wont be accessible becoz it is assigned inside the block using let so its scope only be inside that block of code
    console.log(c);
}
function sample2(){
    const a = 20;

    console.log(a);
}
sample();
sample2();

//scope hoisting

console.log(x)
var x =400;
console.log(x)

console.log(z)
let z = 500;