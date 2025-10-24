const numbers = [1, 2, 3, 4]

function getFirstElement(arr){
    let copy = arr.slice(0)
    return copy.splice(0,2)

}


const res = getFirstElement(numbers)

console.log(res)

const res2 = numbers.map((number) => number *2)
console.log(res2)

