// ForEach method
const numbers = [1, 0, 3, 4, 0, 3]

function count(number){
    console.log(number)
}

numbers.forEach(count);

const details = [{name:"Jack"}]

const update = (detail) =>{
    //console.log(detail.name = "smith")
}

details.forEach(update)

//Map Method

const result = numbers.map((number)=>{
    if (number){
       return "scored"
    }
    return "not scored"
})

console.log(result, numbers)
