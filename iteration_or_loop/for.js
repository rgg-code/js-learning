// for

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

for (let i = 10; i < 21; i++) {
    // console.log(`Outer loop values: ${i}`);
    for (let j = 1; j < 21; j++) {
        // console.log(`Inner loop values: ${j} and outer loop ${i}`);
    // console.log(`${i} * ${j} = ${i*j}`);
    }
    
}

let myArray = ["ram", "gopal", "gupta", "satya", "shyam"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
    
}

// break and  continue

for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`detected 5`);
        break
    }
    console.log(`Value of i is : ${i}`)
    
}
for (let i = 0; i <= 20; i++) {
    if(i == 5){
        console.log(`detected 5`);
        continue
    }
    console.log(`Value of i is : ${i}`)
    
}