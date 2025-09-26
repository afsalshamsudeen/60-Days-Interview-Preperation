
var count = 0;
function once(){

    var channel_name = "zeroDev Schools"
    if (count === 0){
        count +=1;
        return "Thank you for subscribing "+channel_name;


    }else{
        return "Already Subscribed";
    }
}

console.log(once());
console.log(once());
console.log(once());
