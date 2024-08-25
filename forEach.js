const language=["js","java","python","Perl"]
language.forEach(function(item){
    console.log(item);
    
})
//Using Arrow Function

// language.forEach((item)=>{
//     console.log(item);
    
// })


const myCoding=[
    {
        Country:"India",
        Capital:"New Delhi"
    },
    {
        Country:"USA",
        Capital:"Washington DC"
    },
    {
        Country:"UK",
        Capital:"London"
    }
]

myCoding.forEach((item)=>{
    console.log(item.Capital);
    
})