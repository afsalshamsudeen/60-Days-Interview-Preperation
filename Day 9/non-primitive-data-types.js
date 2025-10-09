//Array


//items[100] = "ryzen";
//console.log(items.at(-1))// index in an array is length-1

const items = ["keyboard", "mouse", "monitor", "motherboard"];
const cart = []

    for(let j = 0; j < items.length; j++){
        cart.push(items[j])
    }

console.log(cart)