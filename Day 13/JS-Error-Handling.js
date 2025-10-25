try {
    // Code that might throw an error
} catch (error) {
    // Code to handle the error
    // The 'error' parameter contains information about the thrown error
} finally {
    // Optional: Code that always executes after try and catch, regardless of whether an error occurred
}

function division(a, b){
    try {
        if( b === 0){
            throw new Error("cannot divide by zero")
        }
        const result = a / b;
        console.log("Result: ",result)
    }
    catch (error) {
        console.log("This error occurred: ", error.message)
    }
    finally {
        console.log("Division process completed!")
    }
}


division(10, 0)
division(7000, 50)
division(140, 30)