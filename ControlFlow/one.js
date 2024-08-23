const score=200;
if(score > 100){
    let power = "fly"
    console.log(`User power: ${power}`);
}

// const salary = 1000;
// if(salary>500) console.log("Test1"),console.log("Test2");---->This is a very bad practice

const userLoggedIn= true;
const Debitcard= true;
const loggedInFormGoogle= true;
const loggedInFormEmail=true;

if(userLoggedIn && Debitcard){
    console.log("User can buy Course");
    
}
if(loggedInFormGoogle || loggedInFormEmail){
    console.log("User Logged In");
    
}