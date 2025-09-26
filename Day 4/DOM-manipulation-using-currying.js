function updateSomething(id){
    return function(content){
        document.querySelector("#" + id).textContent = content;
    }
}

const updatedContent = updateSomething("heading");


const handleClick = ()=>{
    updatedContent("Not so welcome! dear");

}
