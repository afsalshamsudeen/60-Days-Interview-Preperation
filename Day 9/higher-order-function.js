// callback function

function learningDevOps(callBack){
    console.log("Starting Kubernetes")
    setTimeout(()=>{
        console.log("Completed Kubernetes")
        callBack();
    }, 2000)
}

function learningDocker(){
    console.log("Starting Docker")
    setTimeout(()=>{
        console.log("Completed Docker")

    }, 2000)
}

learningDevOps(learningDocker)
