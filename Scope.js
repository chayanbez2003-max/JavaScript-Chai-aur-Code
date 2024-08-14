function one(){
    const username="Chayan"
    function two(){
        const website="Github"
        console.log(website)
    }
    //   console.log(website);

      two()

}
one()

if(true){
    const username="Chayan"
    if(username==="Chayan"){
        const website= " Github"
        console.log(username+website)
    }
    //console.log(website)---->Can't access because it is out of the scope
}
//conole.log(username)--->Can't access because it is also out of the scope.

console.log(addnum(15))//Here we can print it because addnum is a function 
function addnum(num){
    return num+1
}


//console.log(addTwo(5))But in this case we are using a variable to store the function that is why we are can't use the variable before initiallizing it..
const addTwo= function(Num){
    return Num+2
}
console.log(addTwo(5))