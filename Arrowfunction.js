const user={
    username:"Chayan",
    price:999,
     
    welcomeMessage: function(){
        console.log(`Hi ${this.username}! welcome to the website`)
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="pk"
// user.welcomeMessage()
// console.log(this);//----this gives an empty object

// function coffee(){
//     let username= "coffee"
//     console.log(this.username);
    
// }
// coffee()
// const one = function(){
//     let username="HP"
//     console.log(this.username)
// }
// one()

const one =()=>{
    let username="Chayan"
    console.log(this);
    
}

const add=(num1,num2)=>{
    return num1 + num2
}
console.log(add(4,5));


/*implecite function===>  
    const add=(num2,num2)=> (num1 + num2)

***** If we use curly braces we need the return syntax but in case of parenthesis no need to return the statement
*/

// const demo=(num1,num2)=>  {{username:"Chayan"}}
// console.log(demo(3,4));
