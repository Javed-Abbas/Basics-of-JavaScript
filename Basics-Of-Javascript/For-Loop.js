//Topic: For-Loop        Channel: Chai aur code             Video No: 27

// const array = ["apple","banana","mango","strobary"];

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

//without deleared any variable print number 1 to 10 
 for (let i = 0; i <= 10; i++) {
     console.log(i);
 }


//Print Tables 1 to 10 using for loop
// for (let i = 1; i <=10; i++) {
//     console.log(i); 
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + '*'+ j + '=' + i*j ); 
        
//     }
    
// }

//Break and Continue 

//break 
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Number 5 is detected");
        break;
    }
    console.log(i);
    
}

//continue
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Number 5 is detected");
        continue;
    }
    console.log(i);
    
}