const myNums=[2,3,4,5,6]
// const newNums=myNums.map((nums)=>{return nums+10})
const newNums=myNums
                .map((nums)=>nums*10)
                .map((nums)=>nums+1)
                .filter((nums)=>nums>=40)
console.log(newNums);
