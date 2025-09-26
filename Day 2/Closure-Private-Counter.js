// use closure to create a private counter

function counter(){
    let _counter = 0;

    function add(increment){
        _counter += increment;
    }
    function sub(decrement){
        _counter -= decrement;
    }
    function view(){
        return "Counter = " +_counter;
    }
    return {
        add,
        sub,
        view,
    }

}


const c = counter();

c.add(5);
c.add(10);
console.log(c.view());

c.sub(4)

console.log(c.view())