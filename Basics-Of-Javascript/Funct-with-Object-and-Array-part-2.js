//Topic: Functions-with-Objects-and-Arrays        Channel: Chai aur code             Video No: 20

//This is Function's Syntax
function calculateCartPrice(...num1){
    return num1;
}

//how to use multiple values in function?
//for use of multiple values we use this method
console.log(calculateCartPrice(200,300,400,500));  //when customer buy many items from shop then we use spread operator

//********************************************************************************8 */

//how to use objects in function?
//This is object's syntax
const user = {
    username: "Javed",
    price: 199
}


//This is Function's syntax
function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);

//**************************************************************************************************** */

// how to use Arrays in Function?
//This is an Array's Syntax
const myNewArray = [200,300,400,500]


//This is function's Syntax
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([600,700,800,900]));

