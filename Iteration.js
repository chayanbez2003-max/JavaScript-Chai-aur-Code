for (let i = 0; i <= 10; i++) {
    console.log(`For loop ${i}`)
    for (let j = 0; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);
            
    }
    
}

//break and continue keywords
for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log('Detected 5');
        break;
        
        
    }
    console.log(`Value of i is ${i}`);
    
    
}

for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log('Detected 5');
        continue;
        
        
    }
    console.log(`Value of i is ${i}`);
    
    
}