
function once(func, context){
    let ran;

    return function(){
        if(func){
            ran = func.apply(context || this,arguments);
            func = null;
        }else{
            console.log("Already Called")
        }
        return ran;
    }
}

const welcome = once((a,b) => console.log("Welcome to idk nothing "+a,b));

welcome(10,20);
welcome()
welcome()