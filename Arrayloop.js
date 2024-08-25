// for of loop
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const greetings="Hellow Geeks"
for (const greet of greetings) {
    console.log(`Each character is ${greet}`)
}

//Maps-->Holdes unique value
 const map= new Map()
 map.set('IN', "India")
 map.set('FRA',"France")
 map.set('USA',"United States Of America")
 map.set('UAE',"United Arab Emirates")
 console.log(map);
 
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}
 
const myObject={
    'Game1':'Cricket',
    'Game2':'Football'
}
// for (const [key,value] of myObject) {
//     console.log(key,':=',value);
    
// }    --------->Error:-myObject is not iterable --->We have to use for in loop.