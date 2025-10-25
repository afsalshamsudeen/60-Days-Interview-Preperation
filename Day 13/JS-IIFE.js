

// (function imme(text){
//     console.log(text)
// })("welcome")

// object destructuring
const user = {name:"Zack", age: 25, isEmployed: true, address:{pin:30}}
const {name, age, isEmployed,address:{pin} } = user;

console.log(isEmployed,pin)


// array destructuring

const numbers = [1,2,3,4,5]
const [a,b,c,d,e] = numbers;

console.log(a,d,e)

let x =10;
let y = 20;

[y, x] = [x, y]

console.log(x, y)

