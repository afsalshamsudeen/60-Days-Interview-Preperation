
function palindrome(str){

    let result = [];
    for(let i = str.length; i >= 0; i--){
        result.push(str[i]);
    }
    return result.join('')

}

const norm = "madam"
const rev = palindrome(norm);
console.log("Reversed: "+ rev)


if (rev === norm){
    console.log(true);
}
else{
    console.log(false);
}