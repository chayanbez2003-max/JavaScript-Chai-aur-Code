//IMMEDIETELY INVOKED FUNCTION EXPRESSION
(function chai(){
    console.log("DB Connected");
    
})();

// (Function defination )(function execution parenthisis)
//Like when we call a function
// by function() syntax here the second parenthesis represents the execution parenthesis
// It is used to reduce the global scope pollution in the code
( () => {
    console.log("DB conected two")
}

)();

( (name) => {
    console.log(`DB conected two ${name}`)
}

)("Chayan")