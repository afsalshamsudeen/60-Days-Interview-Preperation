

function sum(func){
    return function(x){
        return function(y){
            return x + y / 2;
        }
    }
}

const sample = (a, b) =>{
    var a =10;
    var b = 20;

}

const coordinates = sum(sample)

console.log("")