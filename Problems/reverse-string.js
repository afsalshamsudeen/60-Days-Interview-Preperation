// function rev(str){
//     return str.split("").reverse().join('');
// }
//
// const res = rev("javascript");
//
// console.log(res);

function reverse(str){
    let res = [];
    for (let i = str.length; i >= 0; i--){
        res.push(str[i]);
    }
        return res.join('')
}
const norm = "black"
const rev = reverse(norm);

console.log(rev)

if (rev === norm ){
    console.log(true)
}else console.log(false)