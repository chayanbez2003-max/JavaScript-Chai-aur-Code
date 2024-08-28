const myNums=[1,2,3,4]
const total = myNums.reduce(function(accumulator ,currentvalue) {
    console.log(`acc:${accumulator},curr:${currentvalue}`);
    
    return accumulator+currentvalue
},0)
console.log(total);

const shoppingcart=[
    {
        course:"MERN course",
        price:999
    },
    {
        course:"AIML course",
        price:999
    },
    {
        course:"DS course",
        price:999
    },
    {
        course:"SQL course",
        price:999
    },
]
const AmounttoPay= shoppingcart.reduce((acc,item)=>(acc+item.price),0)
console.log(AmounttoPay);
