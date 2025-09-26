//caching or memoize in JavaScript

function myMemoize(func, context){

    const result = {};
    return function(...args){
        var argsCache = JSON.stringify(args);
        if(!result[argsCache]){
            result[argsCache] = func.call(context || this, ...args)
        }
        return result[argsCache];
    }

} //cache

const whateverProduct = (num1, num2)=>{
    for( let i = 0; i<=100000000; i++){}
    return num1 * num2;
}; //program needed to cache

const MemoizedwhateverProduct = myMemoize(whateverProduct); //wrap inside the cache function

console.time("First call");
console.log(MemoizedwhateverProduct(98734,94578));
console.timeEnd("First call");

console.time("Second call");
console.log(MemoizedwhateverProduct(98734,94578));
console.timeEnd("Second call");