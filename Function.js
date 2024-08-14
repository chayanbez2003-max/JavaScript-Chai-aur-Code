function sayMyName(){
    console.log("c");
    console.log("h");
    console.log("a");
    console.log("y");
    console.log("a");
    console.log("n");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

//Login usernam display-----------------------------------------

function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())

//Shopping Cart Generation----------------------------------------

function calculateCartprice(...num1){
 return num1;
}
console.log(calculateCartprice(200,388,566,678))

//Passing Object---------------------------------------------------

const user={
    username:"Chayan",
    price:199
   }
function handelObject(anyObject){
    console.log(`The username is ${anyObject.username} and the price is ${anyObject.price}`)
}
handelObject(user)

//Passing Array Value------------------------------------------------

const myArray=[344,455,22,556]

function getelement(getArray){
    return getArray[1]
}
 console.log(getelement(myArray))
