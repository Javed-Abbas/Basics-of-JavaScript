//Topic: Function and Parameter         Channel: Chai aur code             Video No: 19

//Definition of function given below

// function sayMyName(){
//     console.log("J")
//     console.log("a")
//     console.log("V")
//     console.log("E")
//     console.log("D")
// }
// //reference and execution of function
// sayMyName();

function addTwoNumbers(number1,number2){     //when we write the definition of function we give (input as a parameters)
    let num = number1 + number2
    return num
}

//give arguments in reference
//function call method
const num = addTwoNumbers(3,4);              //when we call the function we pass (values as a parameters)
//console.log("Num:", num);


//real-Time example of function

function logInUserMessage(username){
    return `${username} just loged in`
}

//console.log(logInUserMessage("Javed"));


function logInUserMessage(username = "Sam") {      //if user don't enter his username then default value will be show "Sam"
    if(!username){
        console.log("Please enter a username");
        return 
    }
    return `${username} just loged in`;
}

console.log(logInUserMessage());         //if user enter his username then value will be replace the (Sam) by (javed)