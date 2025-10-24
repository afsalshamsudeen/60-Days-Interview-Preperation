// set and its CRED operations

const repet = [1,2,67,1,3,2,5,7,3,1,2,7,67]

const filter = new Set(repet)
console.log(filter)
const users = new Set([1,2,3,4,5,6])
users.add(12)
users.delete(3)
console.log(users.has(12))

let name = {name: "zack"}
const blah = new WeakSet([name])

console.log(blah)