//push and pop

const numbers = [1,2,3,4]

//const res = numbers.push(6)// the length of the array is returned in PUSH method

//const popRes = numbers.pop()// the value popped will be returned in POP method

//const res = numbers.shift()// shift is used to delete the first element of an array, returns the element deleted

//const res = numbers.unshift(100) // it returns the length of the new array after adding the element on first position
//const res = numbers.slice(1,3) // returned the slice elements
//const res = numbers.splice(0,2,10,20,30,40)// splice method is used to delete, update, add elements in an array
//console.log(res, numbers)

// A new for loop method called for of:
for(let number of numbers){
    console.log(number)
}