//Topic: IF-else statement and Switch        Channel: Chai aur code             Video No: 26

//syntax of if statement
// if(condition){
//     //statement
// }

//exampes
const isUserLoggedIn = true;

if (isUserLoggedIn) {
    //console.log("Yes, User is logged in");
}

//operators 
// <, >, <=, >=, ==, ===, !=, !==, &&, ||

const temperature = 40;

if(temperature == 40){
    console.log("Temperature is equal to 40");
}else{
    console.log("Temperature is not equal to 40");
}

//scope example in if statement
let score = 200;

if(score >= 100){
    let power = "fly";
    console.log(`Teams score is: "${score}"  and power is: "${power}"`);
}
//console.log(`Teams score is: "${score}"  and power is: "${power}"`); We cannot access "power" out-of the scope{} This is called "local scope";

//Short-Hand Notations

let balance = 1000;

if (balance > 500) console.log("With semi-colon we cannot write anything"),
console.log("Putting comma,After the comma we can write everything");  //This is called "Implicit scope";

//For mutiple condition we use: "if-else-if statement"
if(balance < 500){
console.log("Greater than 500");
}else if (balance < 750) {
    console.log("Less Than 750");
}else if (balance < 200) {
    console.log("Less than 200");
}else{
    console.log("Balance is less than 1200");
}

//real-life example1
const userLoggedIn = true;
const userDabitCard = true;

if (userLoggedIn && userDabitCard) {
    console.log("You can buy course");
}

//example2

const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("User Logged in");
}

//*********************************Switch-Statement******************************* */
//switch basic syntax
// 

//example1
let months = 3;

switch (months) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("feb");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("Week mach at 3rd point");
    break;
}

//example2
// let week = 5;

// switch (week) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;

//   default:
//     console.log("Weeks does'nt mach");
//     break;
// }
// //example3
// let week = "sunday";

// switch (week) {
//   case "jan":
//     console.log("Sunday");
//     break;
//   case "Feb":
//     console.log("Monday");
//     break;
//   case "march":
//     console.log("Tuesday");
//     break;
//   case "April":
//     console.log("Wednesday");
//     break;

//   default:
//     console.log("Weeks does'nt mach");
//     break;
// }

//Trutht Vaues concept

const userEmail = "J@Javed.com";

//we don't know how to print truthy values
//But we can use if-ststement for this purpose

if (userEmail) {
    console.log("Got the user Email");
}else{
    console.log("User don't have email");
}

//when we don't compare with anything than we assume that user have eamil;
//When we assume something this is called: "Truthy values"

//falsy values
//false, 0, -0, BigInt 0n, "" empty string, null, undefined, NaN

//Truthy Values
//"0", 'false', " ", [], {}, function(){}

//to check "Empty Array" use this method
const emptyArr = [];

if (emptyArr.length === 0) {
    console.log("Array is empty");
}


//to check "Empty Object" use this method
const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

//Nullish Coalescing Operator (??): Null, Undefined
let val1;
//val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
console.log(val1);

// Ternary operator
//syntax
//condition ? true : fase

// example
const teaPrice = 500;
teaPrice > 100 ? console.log("Tea-Price is greater than 100"): console.log("Tea-Price is less than 100");
