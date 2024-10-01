//Topic: Objects              Youtube Channel: chai aur code                 Video No: 16

//Singleton                  if we use constractor method then singleton makes
//Singleton Method   =       object.create

//object Literals

//how to use symbols in an objects
const mysymbol = Symbol("key1")

const jsUser = {               // In object we use "keys and values"
    firstName: "javed",
    lastName: "Abbas",
    [mysymbol]: "keys2",
    email: "Javed123@gmail.com",
    location: "Khanpur",
    isLogedin: false,
    lastdayLogedIn: ["Monday", "Tuesday"]
}
//Access any object by this method

console.log(jsUser.firstName);
//Second method to Access object
//console.log(jsUser["lastName"]);
//access any symbol in an object by this method
//console.log(typeof jsUser[mysymbol]);

//how to change values of keys in object?
jsUser.email = "jam1122@gmail.com"
//console.log(jsUser);
//if we don't want to changes values of keys in object? use Freeze method
//Object.freeze(jsUser);
jsUser.email = "jamsb1970@gmail.com";
//console.log(jsUser);

//function in objects

jsUser.greeting = function(){
    console.log("Hello javed");
}

//console.log(jsUser.greeting());


jsUser.greetingTwo = function(){
    console.log(`Hello ${this.firstName} `);
}


//console.log(jsUser.greetingTwo());