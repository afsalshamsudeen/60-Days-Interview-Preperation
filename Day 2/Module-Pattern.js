var Module = (function(){
    function privateMethod(){
        console.log("Private Methode")
    }

    return {
        publicMethode : function(){
            console.log("Public Method");
        },

    }
})();

Module.publicMethode();
Module.private() // not returned from Module  so it cant be accessed outside of the module but it is inside the closure.