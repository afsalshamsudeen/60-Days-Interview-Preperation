function reverseString(str){
    let res = [];
    for (let i = str.length; i >= 0; i--){
        res.push(str[i]);
    }
    return res.join('')

}

const String = reverseString("hello")
console.log(String)