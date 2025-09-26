

var a = 10
function scopes(){
    console.log(a)
}

scopes();
//
// {
//
//     let b = 100;
// }
//
// console.log(b) // throws error bcoz let is blocked scope

// {
//     const c = 200;
// }
//
// console.log(c) // throws error bcoz const is also blocked scope

var roomNumber = 202;

    function Enter(){
        var roomNumber =303;
        if(roomNumber){
            var roomNumber = 101; // this variable shadows rest of the variables above because function first look at its own variable the local scope then goes to global scope
        }
            console.log("Enjoy the service at Room Number "+roomNumber); //output 101
    }

    Enter();