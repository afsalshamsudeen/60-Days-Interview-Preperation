// const calc = (a,b=4) =>{// function with default parameter
//     console.log(b)
//     return a + b;
// }
//
// console.log(calc(6, 10));

// function toCelsius(fahrenheit){
//     return (5/9) * (fahrenheit-32);
//
// }
//
// console.log(toCelsius(82))

// function greeting(name, callback){
//     console.log(name);
//     callback();
// }
//
// function sayBye(){
//     console.log("bye bye");
// }
//
// greeting("Sam ", sayBye);

// example of callback function
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send("Hello World!")
})
app.listen(port, () =>{
    console.log(`Running at port ${port}`);
})