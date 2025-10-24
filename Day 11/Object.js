const user = { name: "zack", age: 30, place: "boston"}
const id = {id1:111122, id2:23334223, id3:332534534, id4:4563343}
for(let key in user){
    //console.log(user[key])
}

let sum = 0;
const salary = {zack:40, sam: 60, jin:20, ron: 50}

for (let key in salary){
    sum = sum + salary[key]
}

//console.log("Total salary: "+ sum)

//console.log(Object.values(salary).length)

console.log(Object.assign({},user, id))