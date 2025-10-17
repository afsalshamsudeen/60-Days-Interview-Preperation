//filter method
const numbers = [1, 2, 3, 4, 5, 1]

const result = numbers.filter((number)=>{
    return number > 3
})

//console.log(result)

let benchmarkScore  = 999

// chained condition if else, else if in ternary operator
const benchmark = benchmarkScore > 100 ? "passed" : benchmarkScore === 100 ? "passed" : "failed"

//console.log(benchmark)

const res = numbers.filter((number, index) => {
    //console.log(number, index, numbers.indexOf(number) )
    return numbers.indexOf(number) === index;
})

console.log(res)