const numbers = [1, 2, 3, 4, 5]

const res = numbers.reduce((acc, number) => {
    if( number > 3){
        acc.push(number)
    }
    return acc
},[])

console.log(res)