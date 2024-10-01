//Topic: Functions Scope and mini hoisting        Channel: Chai aur code             Video No: 23
//"This" Keyword: This is used for current context, To Access any vaue from the current text we use "this" keyword
//What is current context?
//curly braces{} is the current context,Everything that is available in curly braces we can acces with the help of "This" Keyword
const user = {
    username: "Javed",
    email: "jam@gmail",
    password: "1122",

    welcomeMessage: function(){
        //.log(`${this.username}, welcome to website`)
    }
}

// user.welcomeMessage();
// user.username = "Abbas";
// user.welcomeMessage(); 


//Basic Function Example
//Below method is not valid for basic function
//Keyword "This" is not work in basic FUNCTION,It is work only in objects


// function chai(){
//     username:"Ali", 
//     console.log(`${this.username}, How are you?`)
// }

// chai();

//This method is not valid for keyword "This" in basic function

//  const code = function(){
//      username: "Jam"
//      console.log(this.username)
//  }  

//  code();


//This is an arrow function
//Keyword "This" is not work in Arrow function
//  const codeAurChai = () =>{
//      username: "Jam"
//      console.log(this.username)
//  }  

//  codeAurChai();


//Arrow Functions

// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }

// console.log(addTwo(4,5{));


//implicit return function

//const twoNum = (num1,num2) => num1+num2
//const twoNum = (num1,num2) => (num1+num2)
const twoNum = (num1,num2) => ({username: "JamSahb"})

console.log(twoNum(4,5));